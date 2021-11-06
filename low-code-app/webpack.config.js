const webpack = require('webpack');

module.exports = {
    entry: [
      './client/index.js'
    ],
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react'
            ]
          }
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          include: /images/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/',
                publicPath: 'images/'
              }
            }
          ]
        },
      ]
    },
  }