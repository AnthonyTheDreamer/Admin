import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebarVisible: '',
    theme: 'auto',
    language: 'en'
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
    setLanguage(state, payload) {
      state.language = payload
    }
  },
  actions: {},
  modules: {},
})
