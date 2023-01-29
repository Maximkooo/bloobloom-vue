<template>
  <div class="current-filter border-black">
    <span v-for="color in colors" :key="color">
      {{ styleFilters(color) }}
    </span>
    <span v-for="shape in shapes" :key="shape">
      {{ styleFilters(shape) }}
    </span>
    <button class="btn-current-filter" @click="test">CLEAR FILTERS</button>
    <div class="text-center result-count">{{ quantityItem }}</div>
  </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
      default: () => [],
    },
    shapes: {
      type: Array,
      default: () => [],
    },
    quantityItem: {
      type: String,
    },
  },
  methods: {
    styleFilters(filter) {
      return (filter = `${filter[0].toUpperCase()}${filter.slice(1)},`);
    },
    test() {
      this.$emit("clear");
    },
  },
};
</script>