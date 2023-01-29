const SET_GLASSES = (state, data) => {
  state.glasses = data
}

const UPDATE_GLASSES = (state, data) => {
  data.map(item => state.glasses.push(item))
}

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

const SET_COLLECTIONS = (state, data) => {
  state.collections = data
}

const SET_CURRENT_COLLECTION = (state, data) => {
  state.currentCollection = data
}

export default {
  SET_GLASSES,
  SET_SHAPES_FILTER,
  SET_COLORS_FILTER,
  CLEAR_SHAPES_FILTER,
  CLEAR_COLORS_FILTER,
  SET_COLLECTIONS,
  UPDATE_GLASSES,
  SET_CURRENT_COLLECTION
}