const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { resolve } = require('path')

module.exports = env => ({
  entry: {
    app: './js/main.js',
    vendor: ['babel-polyfill', 'react', 'react-dom', 'lodash']
  },
  output: {
    filename: 'bundle.[name].[hash].js',
    path: resolve(__dirname, 'dist'),
    pathinfo: !env.prod,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
  ],
  context: resolve(__dirname, 'src'),
  devtool: env.prod ? false : 'eval',
  bail: env.prod,
  devServer: {
    hot: true,
    inline: true,
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
      resolve('./node_modules')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: [
            ["es2015", { "loose": false, "modules": false }],
            'stage-0',
            'react'
          ],
          plugins: ["react-hot-loader/babel"]
        }
      },
      {
        test: /\.css$/, loader: 'style!css'
      },
    ],
  },
})
