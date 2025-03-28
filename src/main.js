import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './public-path'

Vue.config.productionTip = false

let instance = null;

function render(props = {}) {
  const { container, projectId, setGlobalState } = props;

  instance = new Vue({
    router,
    render: (h) => h(App),
    data: {
      projectId: projectId,
      setGlobalState
    }
  }).$mount(container ? container.querySelector('#app') : '#app');//避免与主应用冲突
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
// 必须要有下面三个生命周期，否则主应用无法调用
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}
