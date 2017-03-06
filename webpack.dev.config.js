'use strict';
const path = require('path');
const webpack = require('webpack');
const SRC_DIR = path.resolve(__dirname, './src');
const DIST_DIR = path.resolve(__dirname, './dist');
const STATIC_DIR = path.resolve(__dirname, './static');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        SRC_DIR + '/index'
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/static/',
        // Gets name of object prop, bundle in this case
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new (webpack.optimize.OccurenceOrderPlugin || webpack.optimize.OccurrenceOrderPlugin)()
    ]
};
