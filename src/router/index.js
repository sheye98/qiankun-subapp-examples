import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld";

Vue.use(Router)

let router = new Router({
	mode: 'history',
	base: window.__POWERED_BY_QIANKUN__ ? '/app-vue' : '/',
	routes: [
		{
			path: '/*',  // 修改路由匹配规则
			name: '首页',
			component: HelloWorld
		},
	]
})

export default router
