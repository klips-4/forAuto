import {defineStore} from "pinia";
import {fetchWrapper} from "@/helpers/fetch-wrapper.js";
import router from "@/router/router.js";

const baseURL = `http://localhost:5029`;
export const useAuthStore = defineStore('auth',{
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null,
        errorMessage: null,
        emailStatus: null
    }),
    actions: {
        async login(username, password) {
            try {
                const user = await fetchWrapper.post(`${baseURL}/api/auth/login`, {email:username, password});
                this.user = user
                localStorage.setItem('user', JSON.stringify(user))
                router.push(this.returnUrl || '/main');
            } catch (error) {
                this.errorMessage = error

                setTimeout(() => {
                    this.errorMessage = null;
                }, 5000)
            }

        },

        async isEmailFree(email) {
            console.log(email)
            try{
                const emailCheckResponse = await fetchWrapper.get(`${baseURL}/api/User/IsEmailFree/${email}`)
            } catch (message) {
                this.emailStatus = message
            }
        },

        async signUp() {

        },

        async logout() {
            this.user = null;
            localStorage.removeItem('user')
            router.push('/login');
        }
    }
})



