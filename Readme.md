# single-spa ssr minimal example

A micro frontend setup where the apps can be idependently released, views can be dynamically formed and ssr is possible. No custom framework used and heavily inspired by https://github.com/isomorphic-microfrontends?type=source example and singlespa documentation in general.

This setup is meant to closely resemble how sticher works today.

## Quick Start

1. `nvm use` (Important!!)
2. `yarn` in every folder
3. `cd root && yarn develop`
4. `cd cms && yarn start`
5. go to `localhost:3001` and see it in action

It works by starting the root "sticher", fetches the list of deployed "fragments", fetches the required view from the "cms" and does ssr with all that.

If you want to see the new version of the "fragment", build it and move the built files in `cms/data`, also possible to overwrite live for dev following [import-map-overrides ui doc](https://github.com/isomorphic-microfrontends/pokemons)

## Why change, why compare, why not use what we have if it's the same?

In my humble opinion having a custom built framework is a huge overhead and maintaining it, achieving feature parity, adding docs will be a huge challenge when it seems we have open source framework that satisfy(with recently added ssr support) all our requirements.
