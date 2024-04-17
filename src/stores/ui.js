import { defineStore } from "pinia";

export const useUIStore = defineStore("ui", {
    state: () => ({
        sidebarVisible: '',
        theme: 'auto',
    }),
    actions: {
        toggleSidebar() {
            this.sidebarVisible = !this.sidebarVisible
        },
        updateSidebarVisible(data) {
            this.sidebarVisible = data
        },
    }
});
