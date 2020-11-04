import Vue from 'vue'
import Router from 'vue-router'
import Home from 'app/web/src/view/Home'

Vue.use(Router)

function createRouter() {
	const routes = [
		{
			path: '/',
			component: Home,
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
