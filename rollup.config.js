// rollup.config.js

import merge from "deepmerge";
import { createBasicConfig } from "@open-wc/building-rollup";

const baseConfig = createBasicConfig();

export default merge(baseConfig, [
  {
    input: "./dist/esm/index.js",
    output: {
      dir: "lib/esm",
      format: "esm",
    },
  },
  {
    input: "./dist/esm/index.js",
    output: {
      dir: "lib/cjs",
      format: "cjs",
    },
  },
]);
