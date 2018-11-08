const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  context: path.resolve(__dirname),
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  optimization: {
    splitChunks: {
      minSize: 0
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack LazyLoading Example',
      favicon: '../favicon.ico'
    })
  ]
}