# Recipes Remix

Guide to setting up basic Remix app which queries api

Steps are in respective branches:

- part-0: Initial setup
- part-1: Creating search route

## Tools Used

- Framework [Remix](https://remix.run/)
- API [Edamam](https://www.edamam.com/)

## Development

Run the dev server:

```sh
yarn dev
```

## Deployment

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `yarn build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
