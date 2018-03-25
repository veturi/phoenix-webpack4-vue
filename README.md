# Phxvue

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Start Phoenix endpoint with `mix phx.server`

To start your webpack bundle:

  * Install dependencies with `cd assets && yarn`
  * Start webpack dev server with `npm run build`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser. Vue bundle is injected to the app.html.eex from `localhost:8080`.

## Todo

  * Properly launch webpack dev server and phoenix server through phoenix watcher configuration
  * Properly inject CSS. Now handles only JS

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
