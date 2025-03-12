import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./assets/styles/style.scss"
import router from "./router/router.js";
import {createPinia} from "pinia";
import vue3GoogleLogin from 'vue3-google-login'

const pinia = createPinia()

const app = createApp(App);

app.use(vue3GoogleLogin, {
    clientId: '69031867195-psvmtqgl13cr137jq563faidmsho57u6.apps.googleusercontent.com'
})

app.use(router);
app.use(pinia);
app.mount('#app');