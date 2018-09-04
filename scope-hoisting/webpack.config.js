const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  context: path.resolve(__dirname),
  entry: './src/index.js',
  // entry: {
  //   index: './src/index.js',
  //   another: './src/another-module.js'
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  optimization: {
    providedExports: true,
    usedExports: true,
    runtimeChunk: 'single',
    concatenateModules: true,
    splitChunks: {
      minSize: 0,
      chunks: 'all',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Base Example',
      favicon: '../favicon.ico'
    })
  ]
}