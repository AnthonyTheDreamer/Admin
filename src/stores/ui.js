import { defineStore } from "pinia";
import { getThemeStorage } from '@/utils/localStorage/theme'

export const useUIStore = defineStore("ui", {
    state: () => ({
        sidebarVisible: '',
        theme: getThemeStorage(),
    }),
    actions: {
        toggleSidebar() {
            this.sidebarVisible = !this.sidebarVisible
        },
        updateSidebarVisible(data) {
            this.sidebarVisible = data
        },
        setTheme(data) {
            this.theme = data
        }
    }
});
