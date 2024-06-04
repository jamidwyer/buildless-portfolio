import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from "@rollup/plugin-json";
import { copy } from '@web/rollup-plugin-copy';

export default {
  input: 'index.html',
  output: { dir: 'dist' },
  plugins: [
    copy({ patterns: '**/*.{svg,jpg,png,jpeg,json}' }),
    html(),
    json(),
    nodeResolve()
],
};
