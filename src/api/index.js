import axios from 'axios';

export const getGlasses = (payload = null, page) => {
  console.log(page, 'page');
  return axios.get(`https://api-staging.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-women/glasses?&page[limit]=12&page[number]=${page}${payload}`)

}