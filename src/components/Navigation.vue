<template>
  <header>
    <div class="row">
      <div class="col-4">
        <div class="menu m-4" @mouseover="isMenu = true">MENU</div>
      </div>
      <div class="col-4 text-center navigation">
        <img src="../assets/logo.png" alt="logo" width="30" class="pt-3" />
      </div>
    </div>
    <ul :class="{ 'show-menu': isMenu }" @mouseleave="isMenu = false">
      <li v-for="(item, index) in menuItems" :key="index">
        <a :class="{ arrow: doubleMenuCheck(item) }">{{ item }}</a>
        <ul v-if="doubleMenuCheck(item)">
          <li v-for="(gender, index) in genders" :key="index">
            <a @click="changeType(item, gender)">{{ gender }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isMenu: false,
      menuItems: ["SPECTACLES", "SUNGLASSES", "HOME TRY ON", "PAIR FOR PAIR"],
      genders: ["WOMEN", "MEN"],
    };
  },
  computed: {
    ...mapGetters("glasses", ["collections", "currentCollection"]),
  },
  methods: {
    doubleMenuCheck(item) {
      switch (item) {
        case "SPECTACLES":
          return true;
        case "SUNGLASSES":
          return true;
        default:
          return false;
      }
    },
    changeType(...type) {
      const currentType = this.collections.filter(
        (item) => item.name.toLowerCase() === type.join(" ").toLowerCase()
      );
      this.$store.commit(
        "glasses/SET_CURRENT_COLLECTION",
        currentType[0].configuration_name
      );
      this.$store.dispatch("glasses/updateCollection", {
        color: "",
        shape: "",
        page: 1,
        collection: this.currentCollection,
      });
    },
  },
};
</script>