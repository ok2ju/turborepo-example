import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  name: !options.watch ? "production" : undefined,
  entry: ["./src/**/*.ts?(x)"],
  clean: true,
  sourcemap: options.watch ? true : false,
  external: ["react"],
  format: ["esm", "cjs"],
  dts: true,
  treeshake: true,
  bundle: false,
  splitting: false,
  minify: !options.watch ? true : false,
}));
