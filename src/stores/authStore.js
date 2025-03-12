import {defineStore} from "pinia";
import {fetchWrapper} from "@/helpers/fetch-wrapper.js";
import router from "@/router/router.js";

const baseURL = `http://localhost:5279`;
export const useAuthStore = defineStore('auth',{
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        async login(username, password) {
            const user = await fetchWrapper.post(`${baseURL}/api/auth/sign_in`, {username, password});
            this.user = user
            localStorage.setItem('user', JSON.stringify(user))
            router.push(this.returnUrl || '/main');
        },

        async logout() {
            this.user = null;
            localStorage.removeItem('user')
            router.push('/login');
        }
    }
})



