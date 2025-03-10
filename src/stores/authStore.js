import {defineStore} from "pinia";

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        async login() {
            try {
                const user = 'Admin';
            } catch (error) {
                console.log(error)
            }
        }
    }
})