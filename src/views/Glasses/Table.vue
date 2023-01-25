<template>
  <div class="row">
    <div
      class="col-4 border-black p-0"
      v-for="glass in glasses"
      :key="glass.id"
    >
      <img
        :src="glass.glass_variants[0].media[0].url"
        alt="glass"
        width="100%"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    glasses: {
      type: Array,
      default: () => [],
    },
  }
};
</script>