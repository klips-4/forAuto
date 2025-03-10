import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./assets/styles/style.scss"
import router from "@/router/router.js";



const app = createApp(App);
app.use(router);
app.mount('#app');

