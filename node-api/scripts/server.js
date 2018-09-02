const webpack = require('webpack');
const path = require('path');
const webpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config.js');
const options = {
  hot: true,
  contentBase: path.resolve(__dirname, '..', 'public'),
  host: 'localhost'
};

/**
 * 添加 HMR 相关代码
 * webpack 入口配置被修改为
 * entry: [ 
 *   'E:\\webpack-learning-notes\\node_modules\\webpack-dev-server\\client\\index.js?http://localhost',
 *   'E:\\webpack-learning-notes\\node_modules\\webpack\\hot\\dev-server.js',
 *   './src/index.js'
 * ]
 */
webpackDevServer.addDevServerEntrypoints(config, options);

const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('devServer listening on port 5000');
});