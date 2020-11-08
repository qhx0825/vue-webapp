import { resolve } from 'core-js/fn/promise'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let router = new VueRouter({
	mode: 'hash',
	routes: [{
		path: '/',
		name: 'home',
		component: resolve => require(['./routes/homes/home'], resolve)
	},
	{
		path: '/cate',
		name: 'cate',
		component: resolve => require(['./routes/cate/cate'], resolve)
	},
	{
		path: '/cart',
		name: 'cart',
		component: resolve => require(['./routes/carts/cart'], resolve)
	},
	{
		path: '/user',
		name: 'user',
		component: resolve => require(['./routes/users/user'], resolve),
	},
	{
		path: '/login',
		name: 'login',
		component: resolve => require(['./routes/users/login'], resolve)
	},
	{
		path: '/register',
		name: 'register',
		component: resolve => require(['./routes/users/register'], resolve)
	},
	{
		path: '/good',
		name: 'good',
		component: resolve => require(['./routes/goods/good'], resolve)
	},
	{
		path: '/address',
		name: 'addre',
		component: resolve => require(['./routes/users/Address'], resolve),
	},
	{
		path: '/*',
		redirect: '/'
	}
	]
})

router.beforeEach((to, from, next) => {
	let token = localStorage.getItem('token')
	to.path === '/cart' ? (token ? next() : next('/login')) : next()
})


export default router