const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  context: path.resolve(__dirname),
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  optimization: {
    providedExports: true,
    usedExports: true,
    runtimeChunk: 'single',
    concatenateModules: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Base Example',
      favicon: '../favicon.ico'
    })
  ]
}