<template>
  <div>
    <Navigation />
    <Glasses />
  </div>
</template>

<script>
import Glasses from "./views/Glasses";
import Navigation from "./components/Navigation.vue";

export default {
  components: { Glasses, Navigation },
};
</script>
