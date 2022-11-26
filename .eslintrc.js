module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-te`
  extends: ["te"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
