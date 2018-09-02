const webpack = require('webpack');
const path = require('path');
const webpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config.js');
const options = {
  hot: true,
  contentBase: path.resolve(__dirname, '..', 'public'),
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('devServer listening on port 5000');
});