'use strict'

const path = require('path');

module.exports = {
  mode: 'development',

  entry: [
    './js/app.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../priv/static/js')
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }

}
