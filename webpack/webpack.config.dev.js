const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-eval-source-map",
  devServer: { inline: true },
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader" ,   
          "css-loader?sourceMap=true",
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