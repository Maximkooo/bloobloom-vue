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
  },
  data() {
    return {
      isSelected: false,
    };
  },
  methods: {
    currentItem(name) {
      this.isSelected = !this.isSelected;
      this.$emit("currentItem", name);
    },
  },
};
</script>