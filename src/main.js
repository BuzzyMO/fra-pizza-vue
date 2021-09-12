import { createApp } from 'vue'
// import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import store from './store'

createApp(App).use(router).mount('#app')
createApp(App).use(store)

