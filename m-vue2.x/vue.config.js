module.exports = {
  lintOnSave: false,
  devServer: {
    port: 10000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: 'vue2.xApp',
      libraryTarget: 'umd',
    },
  },
}
