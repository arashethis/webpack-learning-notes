const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  context: path.resolve(__dirname),
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack DllPlugin Example',
      template: 'index.html',
      favicon: '../favicon.ico'
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./dist/vendor.dll.manifest.json')
    })
  ]
}