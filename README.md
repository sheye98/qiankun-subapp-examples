# QianKun 子应用双向通信

## 子应用通过 state 向父应用传递信息
state 中具体参数由主应用定义：
```javascript
// 主应用
// 初始化 state
const actions = initGlobalState({
  flag: '',
});
// 传递 setGlobalState
const microApp = loadMicroApp({
     name: 'app-vue',
     entry: '//onenet.com:7101',
     container: '#microAppContainer',
     props: {
         projectId: this.$store.getters.projectId,
         // 传递 state 给子应用
         setGlobalState: window.microActions.setGlobalState,
      },
    });
```
子应用拿到 setGlobalState 并在 setGlobalState 设置 state 的值
```javascript
// 子应用
const { container, projectId, setGlobalState } = props;

instance = new Vue({
  router,
  render: (h) => h(App),
  data: {
    projectId: projectId,
    setGlobalState
  }
}).$mount(container ? container.querySelector('#app') : '#app');

// 设置 state 值
if (this.$root.$data.setGlobalState) {
    this.$root.$data.setGlobalState({
        flag: 'update',
     });
    console.log('已发送更新信号到主应用');
}
```

## 注意
- index.html 中确保 vue 提前被加载
- webpack library: packageName 保持一致

