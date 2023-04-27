import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./style.css";


// import { BToast } from "bootstrap-vue";

// createApp(App).component("b-toast", BToast);
createApp(App).use(store).use(router).mount("#app");
