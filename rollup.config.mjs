import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from "@rollup/plugin-json";

export default {
  input: 'index.html',
  output: { dir: 'dist' },
  plugins: [
    html(),
    json(),
    nodeResolve()
],
};
