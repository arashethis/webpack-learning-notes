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
  devtool: 'source-map',
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'public'),
    headers: {
      'x-custom-foo': 'bar',
    },
    host: '0.0.0.0',
    port: 3000,
    https: true,
    clientLogLevel: 'none', // none error warning info
    compress: true,
    open: false,
  },
  watch: true, // DevServer默认开启监听模式
  watchOptions: {
    ignored: /node_modules/, // 默认为空
    aggregateTimeout: 300,  // 默认为 300ms 后重新构建
    poll: 1000,  // 默认为 1000ms 询问一次
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack DevServer Example',
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
}