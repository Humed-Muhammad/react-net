// rollup.config.js

import merge from "deepmerge";
import { createBasicConfig } from "@open-wc/building-rollup";
import typescript from "rollup-plugin-typescript2";
import { uglify } from "rollup-plugin-uglify";
const baseConfig = createBasicConfig();

export default merge(baseConfig, [
  {
    input: "./dist/esm/index.js",
    output: {
      dir: "lib/esm",
      format: "esm",
    },
    context: "window",
    plugins: [
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
      uglify(),
    ],
  },
  {
    input: "./dist/cjs/index.js",
    output: {
      dir: "lib/cjs",
      format: "cjs",
    },
    context: "window",
    plugins: [
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
      uglify(),
    ],
  },
]);
