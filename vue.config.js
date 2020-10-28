module.exports = {
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [{
        test: /\.ogmo$/i,
        use: ['ogmo-project-loader']
      }, {
        test: /\.json$/i,
        use: ['ogmo-level-json-loader'],
        type: 'javascript/auto'
      }]
    }
  }
}
