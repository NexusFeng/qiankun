import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false;
const files = require.context('./views', true, /\.vue$/);
const vueFiles = files.keys()
let instance = null
function render(props) {
  vueFiles.forEach(item => {
    if(props.checkFilesName.includes(item)) {
      console.error(`该【${item}】模块与主应用存在名称冲突，请及时修改，否则会造成样式冲突！`)
    }
  })
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#app') 
}
if (window.__POWERED_BY_QIANKUN__) {
  // 动态添加publicPath
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}
if (!window.__POWERED_BY_QIANKUN__) {
  // 默认独立运行
  render()
}
export async function bootstrap() {}
export async function mount(props) {
  render(props)
}
export async function unmount() {
  instance.$destroy()
}
