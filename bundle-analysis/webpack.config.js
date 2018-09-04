const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'none',
  context: path.resolve(__dirname),
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack CodeSpliting Example',
      favicon: '../favicon.ico'
    }),
    new BundleAnalyzerPlugin()
  ]
}
