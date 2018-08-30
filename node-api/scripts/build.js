const webpack = require('webpack');
const path = require('path');

const config = require('./webpack.config.js');

const compiler = webpack(config, (err, stats) => {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n');
});