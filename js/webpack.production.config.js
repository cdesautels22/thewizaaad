const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'prod_bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            include: __dirname,
            loaders: ['babel'],
        }]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    ],
}
