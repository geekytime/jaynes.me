/* eslint-env node */
var config = require("./webpack.config.js")
var path = require("path")
var merge = require("webpack-merge")

module.exports = merge(config, {
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, "static"),
    publicPath: "/",
    disableHostCheck: true,
    port: 4433,
    host: "0.0.0.0",
    historyApiFallback: true
  },
  devtool: "eval",
  mode: "development"
})
