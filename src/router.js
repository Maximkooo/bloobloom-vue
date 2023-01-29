import VueRouter from 'vue-router';
import { store } from './store/index';

import Glasses from './views/Glasses/'

const routes = [
  {
    path: '/',
    name: 'Glasses',
    component: Glasses,
    beforeEnter: (to, from, next) => {
      store.dispatch('glasses/getCollections');
      next();
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;