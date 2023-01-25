import axios from 'axios';

export const test = () => {
  return axios.get(`https://api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-men/glasses?sort%5Btype%5D=collection_relations_position&sort%5Border%5D=asc&filters%5Blens_variant_prescriptions%5D%5B%5D=fashion&filters%5Blens_variant_types%5D%5B%5D=classic&page%5Blimit%5D=12&page%5Bnumber%5D=1&filters%5Bglass_variant_frame_variant_colour_tag_configuration_names%5D%5B%5D=coloured&filters%5Bglass_variant_frame_variant_frame_tag_configuration_names%5D%5B%5D=round&filters%5Bframe_variant_home_trial_available%5D=false`)
}