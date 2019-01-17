const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
          }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,   
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
}