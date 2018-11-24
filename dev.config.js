const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['./src/js/main.js','./src/scss/style.scss'],
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'index.js'
  },
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'dev'),
    compress: true,
    port: 9000
  },
  plugins: [
    new CleanWebpackPlugin(['dev']),
    new HtmlWebpackPlugin({
        title: 'PiewNews',
        template: 'src/index.html',
        filename: 'index.html'
    }),
    new ExtractTextPlugin({
        filename: './style.css',
        allChunks: true,
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
            plugins: [
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      },
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ]
        })
      },{
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader'
          },
        ],
      }
    ]
  }
};