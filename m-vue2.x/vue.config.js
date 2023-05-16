// const CustomPrefixPlugin = require('./src/plugin/CustomPrefixPlugin');
const path = require('path');
module.exports = {
  lintOnSave: false,
  devServer: {
    port: 10000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  chainWebpack: (config) => {
    // config.plugin('CustomPrefixPlugin').use(CustomPrefixPlugin, [
    //   // 插件的选项配置
    //   // 可根据需求进行配置
    // ]);
  },
  configureWebpack: {
    output: {
      library: 'vue2.xApp',
      libraryTarget: 'umd',
    },
    // module: {
    //   rules: [
    //     {
    //       test: /\.vue$/,
    //       use: [
    //         {
    //           loader: path.resolve(__dirname, 'prefix-loader.js'),
    //           // enforce: 'pre',
    //         },
    //       ],
    //     },
    //   ],
    // },
    // plugins: [
    //   new CustomPrefixPlugin({
    //     prefix: 'custom-prefix-', // 自定义的前缀
    //   }),
    // ]
  },
}
