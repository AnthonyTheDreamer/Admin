export default {
    namespaced: true,
    state: () => ({
        sidebarVisible: '',
        theme: 'auto',
        language: 'en'
    }),
    getters: {
        sidebarVisible(state) {
            return state.sidebarVisible
        },
        theme(state) {
            return state.theme
        },
        language(state) {
            return state.language
        },
    },
    mutations: {
        toggleSidebar(state) {
            state.sidebarVisible = !state.sidebarVisible
        },
        updateSidebarVisible(state, payload) {
            state.sidebarVisible = payload
        },
        setLanguage(state, payload) {
            state.language = payload
        }
    },
    actions: {
        toggleSidebar(context) {
            context.commit('toggleSidebar')
        },
        updateSidebarVisible(context, data) {
            context.commit('updateSidebarVisible', data.value)
        },
        setLanguage(context, data) {
            context.commit('setLanguage', data)
        }
    },
}