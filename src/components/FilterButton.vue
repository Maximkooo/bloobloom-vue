<template>
  <button
    class="btn-default up-case"
    :class="{ active: isSelected }"
    @click="currentItem(item)"
  >
    {{ item }}
  </button>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      required: true,
    },
    currentFilter: {
      type: Array,
      default: () => [],
      // required: true
    },
  },
  computed: {
    isSelected() {
      return this.currentFilter.includes(this.item) ? true : false;
    },
  },
  methods: {
    currentItem(name) {
      this.$emit("currentItem", name);
    },
  },
};
</script>