const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { resolve } = require('path')

module.exports = env => ({
  entry: {
    app: './js/main.js',
    vendor: [
      'babel-polyfill',
      'immutable',
      'lodash',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-thunk',
    ],
  },
  output: {
    filename: 'bundle.[name].[hash].js',
    path: resolve(__dirname, 'dist'),
    pathinfo: !env.prod,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
  ],
  context: resolve(__dirname, 'src'),
  devtool: env.prod ? false : 'eval',
  bail: env.prod,
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: {
      assets: false,
      chunkModules: false,
      version: false,
      hash: false,
    },
  },
  resolve: {
    modules: [
      resolve('./src/js'),
      resolve('./node_modules'),
    ],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        query: {
          presets: [
            ['es2015', { 'loose': false, 'modules': false }],
            'stage-0',
            'react',
          ],
          plugins: ['react-hot-loader/babel'],
        },
      },
      {
        test: /\.css$/, loaders: ['style!css'],
      },
    ],
  },
})
