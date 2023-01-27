import Vue from 'vue'
import Vuex from 'vuex';

import glassesModule from "./modules/glasses/index";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    glasses: glassesModule,
  }
});
