const webpack = require('webpack')
const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const graphql = require('./graphql.config')

const BASE_NAME = '/'

const GLOBALS = {
  'process.env': {
    BASE_NAME: JSON.stringify(BASE_NAME),
    CLAIM_SERVICE_HOST: JSON.stringify('/claims'),
    KORD_NETWORK_GRAPHQL_ENDPOINT: JSON.stringify(graphql.endpoints.production),
    NODE_ENV: JSON.stringify('production'),
    SENTRY_DATA_SOURCE_NAME: JSON.stringify(
      'https://db8bdca5895449dbbf204e4c5143e305@sentry.io/273752'
    ),
    SWARM_HOST: JSON.stringify('/'),
  },
}

const PATHS = {
  src: path.join(__dirname, '../app'),
  dist: path.join(__dirname, '../public'),
  img: path.join(__dirname, '../static/img'),
  static: path.join(__dirname, '../static'),
}

module.exports = {
  devtool: 'source-map',

  entry: ['babel-polyfill', PATHS.src],

  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/',
  },

  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new CleanPlugin(['./**/*'], PATHS.dist),
    new CopyPlugin([{ from: PATHS.img, to: 'img' }]),
    new HtmlWebpackPlugin({
      basename: BASE_NAME,
      favicon: path.resolve(PATHS.static, 'favicon.ico'),
      template: path.resolve(PATHS.static, 'index.ejs'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        include: PATHS.src,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.flow$/,
        loader: 'ignore-loader',
      },
    ],
  },
}
