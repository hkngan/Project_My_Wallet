import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'
import 'bootstrap/dist/css/bootstrap.min.css';
sync(store, router)

createApp(App).use(router).use(store).mount('#app'); 