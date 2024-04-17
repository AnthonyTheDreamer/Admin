import { defineStore } from "pinia";

export const useUIStore = defineStore("ui", {
    state: () => ({
        sidebarVisible: '',
        theme: 'auto',
        language: 'en',
    }),
    actions: {
        toggleSidebar() {
            this.sidebarVisible = !this.sidebarVisible
        },
        updateSidebarVisible(data) {
            this.sidebarVisible = data
        },
        setLanguage(data) {
            this.language = data
        }
    }
});
