var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'angular1': './app/src/angular1/src/app.js',
    'polyfills': './app/src/angular2/src/polyfills.ts',
    'vendor': './app/src/angular2/src/vendor.ts',
    'angular2': './app/src/angular2/src/main.ts',
    'backbone': './app/src/backbone/src/app.js',
    'react': './app/src/react/src/app.js'
  },

  resolve: {
    extensions: ['', '.js', '.scss', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loaders: ['raw', 'html']
      },
      {
        test: /\.(sass|scss)$/,
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 3 version',
          'sass?outputStyle=expanded'
        ]
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url?limit=10000'
      },
      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: 'imports?jOuery=jquery'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['angular1', 'angular2', 'vendor', 'polyfills', 'backbone', 'react']
    }),

    new HtmlWebpackPlugin({
      template: 'app/src/index.html'
    })
  ]
};
