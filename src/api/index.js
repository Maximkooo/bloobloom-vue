import axios from 'axios';

const getGlasses = (params) => {
  return axios.get(`https://api-staging.bloobloom.com/user/v1/sales_channels/website/collections/${params.collection}/glasses?&page[limit]=12&page[number]=${params.page}${params.color}${params.shape}`)
}

const getCollections = () => {
  return axios.get(`https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections`)
}
export default {
  getGlasses,
  getCollections
}