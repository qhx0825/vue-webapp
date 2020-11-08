export default {
    namespaced: true,
    state: {
        cates: {}
    },
    getters: {},
    mutations: {
        addCate(state,payload) {
            state.cates[payload.index] = payload.arr
        }
    },
    actions: {},
}