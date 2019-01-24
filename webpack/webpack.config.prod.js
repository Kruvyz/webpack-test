const path = require("path");
const Webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {  
  mode: "production",
  devtool: "source-map",
  stats: "errors-only",
  bail: true,
  // output: {
  //   filename: "s/[name].[chunkhash:8].js",
  //   chunkFilename: "js/[name].[chunkhash:8].chunk.js"
  // },
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,   
          "css-loader",
          {
            loader: "postcss-loader",
            options: { config: { path: "webpack/postcss.config.js" } }
          },
          "sass-loader"
        ]
      }
    ]
  }
});