
export const GlassesHelper = {
  methods: {
    formatColors(colors) {
      return colors
        .map((color) =>
          `&filters[glass_variant_frame_variant_colour_tag_configuration_names]=${color}`)
        .join('');
    },
    formatShapes(shapes) {
      return shapes
        .map((shape) =>
          `&filters[glass_variant_frame_variant_frame_tag_configuration_names]=${shape}`)
        .join('');
    }
  }
}