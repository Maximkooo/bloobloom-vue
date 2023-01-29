<template>
  <div class="row">
    <div
      class="col border-black text-center py-2"
      v-for="(item, index) in items"
      :key="index"
    >
      <FilterButton
        :item="item"
        :currentFilter="colorsFilter"
        @currentItem="changeFilter"
      ></FilterButton>
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
      items: ["black", "tortoise", "coloured", "crystal", "dark", "bright"],
      colors: [],
    };
  },
  computed: {
    ...mapGetters("glasses", ["colorsFilter"]),
  },
  methods: {
    changeFilter(name) {
      this.$store.commit("glasses/SET_COLORS_FILTER", name);
      this.$emit("changeFilters");
    },
  },
};
</script>
