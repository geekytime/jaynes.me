/* eslint-env node */
const HtmlWebpackPlugin = require("html-webpack-plugin")
const htmlWebpackTemplate = require("html-webpack-template")
const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

const links = [
  "https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,600,700,800,900",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
]

const headHtmlSnippet = `
  <meta name="viewport" content="width=device-width,initial-scale=1">
`

module.exports = {
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    path: path.join(__dirname, ".public"),
    filename: "[name].bundle.[hash:8].js",
    publicPath: "/"
  },
  resolve: {
    symlinks: false
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ["babel-loader"],
      exclude: /(node_modules)/,
    },{
      test: /\.less|\.css$/,
      use: [
        "style-loader",
        "css-loader",
        "less-loader"
      ]
    },{
      test: /\.vue$/,
      loader: "vue-loader"
    },{
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: "file-loader",
        options: {}
      }]
    }]
  },
  node: {
    fs: "empty"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "initial",
          enforce: true
        }
      }
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: htmlWebpackTemplate,
      title: "Chris - Home",
      filename: "index.html",
      inject: false,
      lang: "en-US",
      headHtmlSnippet,
      links
    })
  ]
}
