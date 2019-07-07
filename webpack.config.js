var webpack = require('webpack');
var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = ['faker', 'lodash', 'react', 'redux', 'react-redux', 'react-dom', 'react-input-range', 'redux-form', 'redux-thunk'];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
      new HtmlPlugin({
        template: 'src/index.html'
      })
  ]
};
