import Vue from 'vue'
import App from './App.vue'
import './modules/bootstrap.js';
import '../styles/index.css'


new Vue({
  render: h => h(App),
}).$mount('#app')
