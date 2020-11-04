import Vue from 'vue'
import createStore from './store/store.js'
import createRouter from './router'
import App from './App.vue'
import { sync } from 'vuex-router-sync'

export function createApp() {
	const store = createStore()
	const router = createRouter()
	sync(store, router)
	const app = new Vue({
		router,
		store,
		render: h => h(App),
	})

	return { app, store, router, App }
}
