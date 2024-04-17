export default {
    namespaced: true,
    state: () => ({
        token: ''
    }),
    getters: {
        token(state) {
            return state.token
        },
    },
    mutations: {
        setToken(state, payload) {
            state.sidebarVisible = payload
        },
    },
    actions: {
        setToken(context) {
            context.commit('toggleSidebar')
        },
    },
}