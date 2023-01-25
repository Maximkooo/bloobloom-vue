<template>
  <div class="row">
    <div
      class="col-3 border-black text-center"
      v-for="(item, index) in items"
      :key="index"
    >
      <FilterButton :item="item" @currentItem="changeFilter"></FilterButton>
      <!-- <button @click="test()"></button> -->
    </div>
  </div>
</template>


<script>
import { test } from "../../api/index";
import FilterButton from "../../components/FilterButton.vue";

export default {
  components: { FilterButton },
  data() {
    return {
      items: ["square", "rectangle", "round", "cat-eye"],
      currentFilter: [],
      max: true,
    };
  },
  computed: {
    isSelected() {
      console.log(this.currentFilter);
      return this.currentFilter.includes(this.items);
    },
  },
  methods: {
    async test() {
      const catFactsResponse = await test();
      console.log(catFactsResponse.data);
    },
    changeFilter(name) {
      this.currentFilter.push(name);
    },
  },
};
</script>
