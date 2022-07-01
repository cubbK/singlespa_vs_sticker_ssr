import React from "react";
import ReactDOMServer from "react-dom/server.js";
import Root from "./root.component.js";
import { ServerStyleSheets } from "@material-ui/core/styles";

export const getResponseHeaders = props => {
  return {
    "x-pokemons": 1
  };
};

export async function serverRender(props) {
  const sheets = new ServerStyleSheets({});
  const content = sheets.collect(<Root />);
  const htmlStream = ReactDOMServer.renderToString(content);

  // Grab the CSS from the sheets.
  const css = sheets.toString();
  const assets = `<style id="jss-server-side-pokemons">${css}</style>`;
  return { content: htmlStream, assets };
}
