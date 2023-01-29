import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";


const state = {
  glasses: [],
  shapesFilter: [],
  colorsFilter: [],
  collections: [],
  currentCollection: 'spectacles-women'
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
