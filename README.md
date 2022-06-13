# 微前端 demo  基座(vue)
## 项目落地问题汇总

### 由主应用路由往微应用跳转不生效,微应用内路由跳转失效（主、微都是hash模式）
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

