import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import { registerMicroApps, start } from 'qiankun'
const apps = [
  {
    name: 'vue2',
    entry: '//localhost:10000', // 默认加载这个html,解析里面的js 动态执行(子应用必须支持跨域) 因为内部用的fetch
    container: '#vue2',
    activeRule: '/vue',
    props: { a: 1 },
  },
  {
    name: 'react',
    entry: '//localhost:20000',
    container: '#react',
    activeRule: '/react',
  },
]
registerMicroApps(apps)
start()

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
