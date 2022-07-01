import { app } from "./app.js";
import {
  constructServerLayout,
  sendLayoutHTTPResponse
} from "single-spa-layout/server";
import _ from "lodash";
import { getImportMaps } from "single-spa-web-server-utils";
import fetch from "node-fetch";

async function getServerLayout() {
  const data = await fetch("http://localhost:3005/views/index.html");
  const viewHTML = await data.text();
  const serverLayout = constructServerLayout({
    html: viewHTML
  });
  console.log({ viewHTML });
  return serverLayout;
}

app.use("*", async (req, res, next) => {
  const developmentMode = process.env.NODE_ENV === "development";
  const importSuffix = developmentMode ? `?ts=${Date.now()}` : "";

  const importMapsPromise = getImportMaps({
    url: "http://localhost:3005/import_maps.json",
    nodeKeyFilter(importMapKey) {
      return importMapKey.startsWith("@isomorphic-mf");
    },
    req,
    allowOverrides: true
  }).then(({ nodeImportMap, browserImportMap }) => {
    global.nodeLoader.setImportMapPromise(Promise.resolve(nodeImportMap));
    return { nodeImportMap, browserImportMap };
  });

  const props = {
    user: {
      id: 1,
      name: "Test User"
    }
  };

  const fragments = {
    importmap: async () => {
      const { browserImportMap } = await importMapsPromise;
      return `<script type="systemjs-importmap">${JSON.stringify(
        browserImportMap,
        null,
        2
      )}</script>`;
    }
  };

  const renderFragment = name => fragments[name]();

  const serverLayout = await getServerLayout();
  console.log({ serverLayout });
  sendLayoutHTTPResponse({
    serverLayout,
    urlPath: req.originalUrl,
    res,
    renderFragment,
    async renderApplication({ appName, propsPromise }) {
      await importMapsPromise;
      const [app, props] = await Promise.all([
        import(appName + `/server.mjs${importSuffix}`),
        propsPromise
      ]);
      return app.serverRender(props);
    },
    async retrieveApplicationHeaders({ appName, propsPromise }) {
      await importMapsPromise;
      const [app, props] = await Promise.all([
        import(appName + `/server.mjs${importSuffix}`),
        propsPromise
      ]);
      return app.getResponseHeaders(props);
    },
    async retrieveProp(propName) {
      return props[propName];
    },
    assembleFinalHeaders(allHeaders) {
      return Object.assign({}, Object.values(allHeaders));
    }
  })
    .then(next)
    .catch(err => {
      console.error(err);
      res.status(500).send("A server error occurred");
    });
});
