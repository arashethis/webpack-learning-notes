const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'none',
  context: path.resolve(__dirname),
  entry: {
    vendor: ['lodash']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].dll.js',
    library: 'dll_library'
  },
  plugins: [
    new webpack.DllPlugin({
      name: 'dll_library',
      path: path.resolve(__dirname, 'dist', '[name].dll.manifest.json')
    })
  ]
}