import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";


const state = {
  shapesFilter: [],
  colorsFilter: []
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
