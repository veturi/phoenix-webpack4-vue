# Phxvue

This template uses Phoenix Server to serve actual Phoenix content and webpack dev server to serve webpack Vue bundle from a standalone endpoint. Check `assets/webpack.config.dev.js` if you want to reconfigure webpack functionality.

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Start Phoenix endpoint with `mix phx.server`

To start your webpack bundle:

  * Install dependencies with `cd assets && yarn`
  * Start webpack dev server with `yarn run build`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser. Vue bundle is injected to the `app.html.eex` from `localhost:8080`.

## Todo

  * Properly launch webpack dev server and phoenix server through phoenix watcher configuration
  * SASS/LESS (or some other) preprocessor for CSS
  * Properly inject CSS. Now handles only JS
  * Production build propably not yet working. Check.
  * Docker support

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix

## Helpful links when setting this up (and for later reference)

  * Github issue discussion: https://github.com/webpack/webpack-dev-server/issues/262
  * Webpack DevServer docs: https://webpack.js.org/configuration/dev-server/#devserver-port
  * Webpack HMR docs: https://webpack.js.org/guides/hot-module-replacement/
  * Webpack DevServer GitHub wiki (last section): https://github.com/webpack/docs/wiki/webpack-dev-server
  * Blogpost by Franze JR: https://www.dailydrip.com/blog/how-to-use-phoenix-with-webpack-react-redux.html
  * Vue and Webpack 4 Blogpost by Daniel Cook: https://itnext.io/vue-js-and-webpack-4-from-scratch-part-2-5038cc9deffb
