const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');


const config = require('./webpack.config.js');
config.entry = ['./dev-client.js'].concat(config.entry);

console.log(config.entry)

const app = express();

const compiler = webpack(config);

app.use(webpackMiddleware(compiler));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(4000);