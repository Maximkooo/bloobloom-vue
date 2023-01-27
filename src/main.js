import Vue from 'vue'
import App from './App.vue'
import './modules/bootstrap.js';
import '../styles/index.css'
import { store } from './store/index'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
