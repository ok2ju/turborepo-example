# Turborepo-example

This is an design-system example using turborepo.

## Info

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `core-react`: a stub React component library shared by `docs` application
- `eslint-config-te`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `tailwind-config`: `tailwind.config.js` shared `tailwindcss` configuration

### Build

To build all apps and packages, run the following command:

```
cd turborepo-example
yarn build
```

### Develop

To develop all apps and packages, run the following command:

```
cd turborepo-example
yarn dev
```
