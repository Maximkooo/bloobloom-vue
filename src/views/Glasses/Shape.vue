<template>
  <div class="row">
    <div
      class="col border-black text-center py-2"
      v-for="(item, index) in items"
      :key="index"
    >
      <FilterButton :item="item" :currentFilter="shapesFilter" @currentItem="changeFilter"></FilterButton>
    </div>
  </div>
</template>

<script>
import FilterButton from "../../components/FilterButton.vue";
import { mapGetters } from "vuex";

export default {
  components: { FilterButton },
  data() {
    return {
      items: ["square", "rectangle", "round", "cat-eye"],
    };
  },
  computed: {
    ...mapGetters("glasses", ["shapesFilter"]),
  },
  methods: {
    changeFilter(name) {
      this.$store.commit("glasses/SET_SHAPES_FILTER", name);
      this.$emit("changeFilters");
    },
  },
};
</script>
