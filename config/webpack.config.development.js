const webpack = require('webpack')
const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const graphql = require('./graphql.config')

const HOST = 'http://localhost'
const PORT = 3000
const APP_URL = `${HOST}:${PORT}/`

const GLOBALS = {
  'process.env': {
    APP_URL: JSON.stringify(APP_URL),
    BASE_NAME: JSON.stringify('/'),
    CLAIM_SERVICE_HOST: JSON.stringify(`${HOST}:9000`),
    KORD_NETWORK_GRAPHQL_ENDPOINT: JSON.stringify(
      graphql.endpoints.development
    ),
    NODE_ENV: JSON.stringify('development'),
    SENTRY_DATA_SOURCE_NAME: JSON.stringify(
      'https://db8bdca5895449dbbf204e4c5143e305@sentry.io/273752'
    ),
    SWARM_HOST: JSON.stringify(`${HOST}:8500`),
  },
}

const PATHS = {
  src: path.join(__dirname, '../app'),
  dist: path.join(__dirname, '../public'),
  img: path.join(__dirname, '../static/img'),
  static: path.join(__dirname, '../static'),
  data: path.join(__dirname, '../data'),
}

module.exports = {
  devServer: {
    contentBase: PATHS.dist,
    port: PORT,
    stats: 'errors-only',
    historyApiFallback: true,
  },

  devtool: 'eval',

  entry: ['babel-polyfill', PATHS.src],

  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/',
  },

  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new CleanPlugin(['./**/*'], PATHS.dist),
    new CopyPlugin([{ from: PATHS.img, to: 'img' }]),
    new HtmlWebpackPlugin({
      basename: APP_URL,
      favicon: path.resolve(PATHS.static, 'favicon.ico'),
      template: path.resolve(PATHS.static, 'index.ejs'),
    }),
  ],

  resolve: {
    modules: [PATHS.src, 'node_modules'],
    alias: {
      core: 'core',
      domains: 'domains',
      pages: 'pages',
    },
  },

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
    ],
  },
}
