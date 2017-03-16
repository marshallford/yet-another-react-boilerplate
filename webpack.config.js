const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const { resolve } = require('path')
const packageInfo = require('./package.json')

const addPlugin = (add, plugin) => add ? plugin : undefined
const removeEmpty = array => array.filter(i => !!i)
const addSuffix = (add, str, array) => add ? array.map(i => i + str) : array

module.exports = env => ({
  entry: {
    // babel-plugin-lodash seems to only work with one big bundle, might be a webpack 2 tree shaking issue
    // vendor: ['babel-polyfill', ...Object.keys(packageInfo.dependencies)].filter((val) => val !== 'normalize.css'),
    app: ['babel-polyfill', './js/app/main.js'],
  },
  output: {
    filename: 'bundle.[name].[hash].js',
    path: resolve(__dirname, 'dist'),
    pathinfo: !env.prod,
  },
  plugins: removeEmpty([
    addPlugin(env.prod || env.dev, new HtmlWebpackPlugin({
      template: './index.html',
    })),
    addPlugin(env.dev, new webpack.HotModuleReplacementPlugin()),
    addPlugin(env.prod || env.dev, new webpack.NamedModulesPlugin()),
    // addPlugin(env.prod || env.dev, new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    // })),
    addPlugin(env.prod || env.dev, new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    })),
    addPlugin(env.prod || env.dev, new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        VERSION: JSON.stringify(packageInfo.version),
      },
    })),
    addPlugin(env.prod, new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    })),
    addPlugin(env.prod, new webpack.optimize.OccurrenceOrderPlugin(true)),
    addPlugin(env.prod, new ExtractTextPlugin('main.[hash].css')),
  ]),
  context: resolve(__dirname, 'src'),
  devtool: env.prod ? false : 'cheap-module-eval-source-map',
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
  performance: {
    hints: false,
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
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: [
            ['es2015', { 'modules': false }],
            'stage-0',
            'react',
          ],
          plugins: ['react-hot-loader/babel', 'transform-decorators-legacy', 'lodash'],
        },
        exclude: [resolve('./src/static'), /node_modules/],
      },
      {
        test: /\.scss$/,
        loaders: env.prod ? ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }) : addSuffix(env.dev, '?sourceMap', ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']),
        exclude: [resolve('./src/static')],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: `${env.prod ? 'file-loader' : 'url-loader'}?name=[path][name].[hash].[ext]`,
        exclude: [resolve('./src/static')],
      },
      {
        test: /\.*$/,
        loader: `${env.prod ? 'file-loader' : 'file-loader'}?name=[name].[ext]`,
        include: [resolve('./src/static')],
      },
      {
        test: /\.json$/,
        loader: ['json-loader'],
        exclude: [resolve('./src/static')],
      },
    ],
  },
})
