import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import cate from './module/cate'
import cart from './module/cart'

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        cate,
        cart
    }
})