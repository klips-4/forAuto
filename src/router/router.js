import {createRouter, createWebHashHistory} from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import unAuthLayout from "@/layouts/UnAuthLayout.vue";
import LoginPage from "@/pages/LoginPage.vue";
import SignUpPage from "@/pages/SignUpPage.vue";
import {useAuthStore} from "@/stores/authStore.js";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/main',
            name: 'main',
            meta: {layout: AuthLayout},
            component: MainPage
        },
        {
            path: '/login',
            name: 'login',
            meta: {layout: unAuthLayout},
            component: LoginPage
        },
        {
            path: '/signup',
            name: 'signup',
            meta: {layout: unAuthLayout},
            component: SignUpPage
        },

    ]
})
router.beforeEach(async (to) => {
    const publicPage=['/login', '/signup'];
    const authRequired = !publicPage.includes(to.path);
    const auth= useAuthStore();

    if (authRequired && !auth.user){
        auth.returnUrl = to.fullPath;
        return '/login'
    }
})
export default router;