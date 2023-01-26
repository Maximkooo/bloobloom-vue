<template>
  <div class="row">
    <div
      class="col border-black text-center py-2"
      v-for="(item, index) in items"
      :key="index"
    >
      <FilterButton :item="item" @currentItem="changeFilter"></FilterButton>
    </div>
  </div>
</template>

<script>
import FilterButton from "../../components/FilterButton.vue";
import { TYPE_OF_FILTER } from "../../helper/constants";

export default {
  components: { FilterButton },
  data() {
    return {
      items: ["square", "rectangle", "round", "cat-eye"],
      shapes: [],
    };
  },
  methods: {
    changeFilter(name) {
      if (this.shapes.includes(name)) {
        this.shapes = this.shapes.filter((i) => i !== name);
      } else {
        this.shapes.push(name);
      }
      this.$emit("shapesFilter", this.shapes, TYPE_OF_FILTER.SHAPE);
    },
  },
};
</script>
