# 微前端 demo  (主应用技术栈为vue2.x,微应用技术栈为vue2.x,主、微都是hash模式)
## 项目落地问题汇总

### 1、由主应用路由往微应用跳转不生效,微应用内路由跳转失效
- 主应用和微应用挂载的dom节点最好不一致,例主为`#app`,微为`#baseApp`
- 在主应用配置`activeRule: '#/mom/'`，微应用的所有路由需在`/mom`下，就会被拦截
```js
{
    name: 'ztmom',
    entry: '//localhost:10000',
    container: '#baseApp',
    activeRule: '#/mom/',
    props: {
      store: store.state.baseData,
    },
  },
```

### 2、静态资源引用问题(字体下载正常但是不显示)
- 静态资源不要放在public目录下,放在src目录下,结合<a  href ="https://qiankun.umijs.org/zh/faq#%E5%BE%AE%E5%BA%94%E7%94%A8%E6%89%93%E5%8C%85%E4%B9%8B%E5%90%8E-css-%E4%B8%AD%E7%9A%84%E5%AD%97%E4%BD%93%E6%96%87%E4%BB%B6%E5%92%8C%E5%9B%BE%E7%89%87%E5%8A%A0%E8%BD%BD-404">官网图片解决方式</a>,第一种办法压缩图片
- 字体放在publice目录下时，如果不显示,尝试引入字体的`.eot`文件

### 3、主应用跳转至微应用后,微应用资源不加载
- 修改`vue.config.js`里的资源入口为`main.js`
```js
// vue.config.js
chainWebpack: config => {
    const entry = config.entry('app')
    entry.add("@/main.js").end();
}
```

### 4、子应用跳转至主应用user页面
注意: 在跳转过程中不能使用路由跳转,会被当前应用路由守卫拦截,所以采用原生路由修改方式实现跳转
- history模式
```js
window.history.pushState({}, "", "/user");
```
- hash模式
```js
if (window.__POWERED_BY_QIANKUN__) {
  window.location.hash = "/user";
  window.location.reload();
 }
```

