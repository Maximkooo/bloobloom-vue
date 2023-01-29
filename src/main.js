import Vue from 'vue'
import App from './App.vue'
import './modules/bootstrap.js';
import '../styles/index.css'
import { store } from './store/index'
import router from './router';
import VueRouter from "vue-router";


Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
