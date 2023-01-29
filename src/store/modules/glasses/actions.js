import ApiCampaign from '../../../api/index';

const getGlasses = ({ commit }, params) => {
  return ApiCampaign.getGlasses(params).then((response) => {
    commit('SET_GLASSES', response.data.glasses);
  })
}

const updateGlasses = ({ commit }, params) => {
  return ApiCampaign.getGlasses(params).then((response) => {
    commit('UPDATE_GLASSES', response.data.glasses);
  })
}

const updateCollection = ({ commit }, params) => {
  return ApiCampaign.getGlasses(params).then((response) => {
    commit('CLEAR_COLORS_FILTER');
    commit('CLEAR_SHAPES_FILTER');
    commit('SET_GLASSES', response.data.glasses);

  })
}

const getCollections = ({ commit }) => {
  return ApiCampaign.getCollections().then((response) => {
    commit('SET_COLLECTIONS', response.data.collections);
  })
};

export default {
  getGlasses,
  updateGlasses,
  getCollections,
  updateCollection
}