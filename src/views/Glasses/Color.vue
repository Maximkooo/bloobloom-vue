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
      items: ['black', 'tortoise', 'coloured', 'crystal', 'dark', 'bright'],
      colors: [],
    };
  },
  methods: {
    changeFilter(name) {
      if (this.colors.includes(name)) {
        this.colors = this.colors.filter((i) => i !== name);
      } else {
        this.colors.push(name);
      }
      this.$emit('colorsFilter', this.colors, TYPE_OF_FILTER.COLOR);
    },
  },
};
</script>
