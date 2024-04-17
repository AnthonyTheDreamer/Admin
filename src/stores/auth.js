import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: null
    }),
    actions: {
        setToken(data) {
            this.token = data;
        },
        removeToken() {
            this.token = null;
        }
    }
});
