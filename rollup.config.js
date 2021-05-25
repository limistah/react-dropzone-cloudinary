import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import css from 'rollup-plugin-css-only';
import json from 'rollup-plugin-json';

const umdGlobals = {
  react: 'React',
  'prop-types': 'PropTypes',
};

export default {
  input: './src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'reactDropzoneCloudinary',
    globals: umdGlobals,
    sourcemap: 'inline',
    exports: 'named',
  },
  external: Object.keys(umdGlobals),
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({ preferBuiltins: false, browser: true }),
    commonjs(),
    uglify(),
    css({ output: 'dist/bundle.css' }),
    json(),
  ],
};
