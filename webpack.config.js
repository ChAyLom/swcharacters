const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = (env, argv) => {
  const devMode = argv.mode === 'development';

  return {
    mode: devMode ? 'development' : 'production',
    devtool: devMode ? 'source-map' : false,
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.[contenthash:5].js'
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '',
              },
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: devMode ?
                    '[path][name]__[local]--[hash:base64:5]' :
                    '[hash:base64]',
                }
              }
            },
            'sass-loader',
          ]
        },
        {
          test: /\.(png|jpg|svg|otf|ttf)$/,
          use: 'file-loader'
        }
      ]
    },
    resolve: {
      extensions: [
        '.js',
        '.jsx',
        '.tsx',
        '.ts'
      ]
    },
    devServer: {
      port: 8080,
      watchContentBase: true,
      hot: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'main.[contenthash:5].css'
      }),
      new DotenvWebpackPlugin({
        systemvars: true,
      }),
    ]
  }
};