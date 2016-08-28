const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const { resolve } = require('path')
const config = require('./config')

const addPlugin = (add, plugin) => add ? plugin : undefined
const removeEmpty = array => array.filter(i => !!i)
const addSuffix = (add, str, array) => add ? array.map(i => i + str) : array

module.exports = env => ({
  entry: {
    app: './js/app/main.js',
    vendor: config.vendor_modules,
  },
  output: {
    filename: 'bundle.[name].[hash].js',
    path: resolve(__dirname, 'dist'),
    pathinfo: !env.prod,
  },
  plugins: removeEmpty([
    addPlugin(env.prod || env.dev, new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index.html',
    })),
    addPlugin(env.prod || env.dev, new webpack.HotModuleReplacementPlugin()),
    addPlugin(env.prod || env.dev, new webpack.NamedModulesPlugin()),
    addPlugin(env.prod || env.dev, new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    })),
    addPlugin(env.prod, new webpack.optimize.DedupePlugin()),
    addPlugin(env.prod, new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    })),
    addPlugin(env.prod || env.dev, new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        VERSION: JSON.stringify(require('./package.json').version),
      },
    })),
    addPlugin(env.prod, new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
    })),
    addPlugin(env.prod, new webpack.optimize.OccurrenceOrderPlugin(true)),
    addPlugin(env.prod, new ExtractTextPlugin('main.[hash].css')),
  ]),
  context: resolve(__dirname, 'src'),
  devtool: env.prod ? false : 'eval',
  bail: env.prod,
  devServer: {
    hot: true, // full reload on error, but shows actual error unlike hotOnly
    // hotOnly: true,
    inline: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    stats: {
      assets: false,
      chunkModules: false,
      version: false,
      hash: false,
    },
  },
  resolve: {
    modules: [
      resolve('./src'),
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
          cacheDirectory: true,
          presets: [
            ['es2015', { 'modules': false }],
            'stage-0',
            'react',
          ],
          plugins: ['react-hot-loader/babel'],
        },
      },
      {
        test: /\.scss$/,
        loaders: env.prod ? ExtractTextPlugin.extract({
          loader: ['css', 'postcss', 'sass'],
        }) : addSuffix(env.dev, '?sourceMap', ['style', 'css', 'postcss', 'sass']),
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: `${env.prod ? 'file' : 'url'}?name=[path][name].[hash].[ext]`,
      },
      {
        test: /\.json$/,
        loader: ['json-loader'],
      },
    ],
  },
  postcss: () => [autoprefixer],
})
