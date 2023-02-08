import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import Router from './routers'
// import { BootstrapVue } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'



createApp(App).use(store).use(Router).mount('#app')
import "bootstrap/dist/js/bootstrap.js"