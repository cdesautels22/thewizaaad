const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            include: __dirname,
            loaders: ['babel'],
        }]
    }
}
