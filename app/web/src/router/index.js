import Vue from 'vue'
import Router from 'vue-router'
import Home from 'app/web/src/view/Home'

Vue.use(Router)

function createRouter() {
	const routes = [
		{
			path: '/',
			component: Home, // 进入的默认首页不能用异步路由，否则会找不到
		},
		{
			path: '/About',
			component: () => import('../view/About.vue'), // 异步路由
		},
		{
			path: '*',
			redirect: '/',
		},
	]

	const router = new Router({
		mode: 'history',
		routes,
	})

	return router
}

export default createRouter
