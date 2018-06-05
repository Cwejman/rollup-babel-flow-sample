/* eslint-disable flowtype/require-valid-file-annotation */
import babel from 'rollup-plugin-babel';

const pkg = require('./package.json');

const input = './src/index.js';

const getBabelOptions = () => ({
  exclude: ['node_modules/**', '**/*.css', 'lib/**'],
  runtimeHelpers: true,
});

export default [
  {
    input,
    output: {
      file: 'lib/sample.js',
      format: 'umd',
      name: 'Sample',
    },
    plugins: [
      babel(getBabelOptions()),
    ],
  },
];
