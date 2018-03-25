'use strict'

const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  entry: [
    './js/app.js'
  ],

  output: {
    //filename: 'bundle.js',
    //path: path.resolve(__dirname, 'dist')
    path: path.resolve(__dirname, 'public'),
    publicPath: `http://localhost:8080/`,
    filename: 'bundle.js',
  },

  devServer: {
    port: 8080,
    publicPath: "http://localhost:8080/",
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
