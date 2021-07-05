import del from 'rollup-plugin-delete'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
const { babel, getBabelOutputPlugin } = require("@rollup/plugin-babel");


export default {
    input: 'src/main.js',
    output: {
        file: 'dist/main.js',
        format: 'commonjs',
        sourcemap: true,
    },
    plugins: [
        del({
            targets: "./dist/*"
        }),
        resolve(),
        commonjs(),
        json(),
        babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
    ]
}