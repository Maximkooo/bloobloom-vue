const SET_SHAPES_FILTER = (state, shape) => {
  if (state.shapesFilter.includes(shape)) {
    state.shapesFilter = state.shapesFilter.filter((i) => i !== shape);
  } else {
    state.shapesFilter.push(shape);
  }
}

const CLEAR_SHAPES_FILTER = (state) => {
  state.shapesFilter = []
}

const SET_COLORS_FILTER = (state, color) => {
  if (state.colorsFilter.includes(color)) {
    state.colorsFilter = state.colorsFilter.filter((i) => i !== color);
  } else {
    state.colorsFilter.push(color);
  }
}

const CLEAR_COLORS_FILTER = (state) => {
  state.colorsFilter = []
}

export default {
  SET_SHAPES_FILTER,
  SET_COLORS_FILTER,
  CLEAR_SHAPES_FILTER,
  CLEAR_COLORS_FILTER
}