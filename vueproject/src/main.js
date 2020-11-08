import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router.js'
import store from './store/index.js'
new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
