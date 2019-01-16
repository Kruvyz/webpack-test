const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: "./src/script/index.js",
    output: {
        path: path.join(__dirname, "../build"),
        filename: "js/[name].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../src/index.html")
          })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",   
                    "css-loader?sourceMap=true",
                    "sass-loader"
                ]
            }
        ]
    }
}