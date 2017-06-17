import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.js',
  format: 'umd',
  dest: 'dist/longitude.js',
  moduleName: 'longitude',
  plugins: [
    commonjs({
      exclude: ['node_modules/**'],
      extensions: ['.js'],
      ignoreGlobal: false
    }),
    builtins(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
