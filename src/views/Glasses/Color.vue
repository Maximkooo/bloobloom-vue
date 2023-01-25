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

export default {
  components: { FilterButton },
  data() {
    return {
      items: ['black', 'tortoise', 'coloured', 'crystal', 'dark', 'bright'],
      currentFilter: [],
    };
  },
  destroyed(){
    console.log(123);
  },
  methods: {
    changeFilter(name) {
      if (this.currentFilter.includes(name)) {
        this.currentFilter = this.currentFilter.filter((i) => i !== name);
      } else {
        this.currentFilter.push(name);
      }
      this.$emit('colorFilter', this.currentFilter);
    },
  },
};
</script>
