<template>
  <div>
    <Navigation />
    <div class="row">
      <div class="col-lg-4 border-black"></div>
      <div class="col-lg-4 text-center border-black title">
        Spectacles Women
      </div>
      <div class="col-lg-4 border-black">
        <div class="row">
          <div class="col-lg-3 col-6 title-filter text-center">
            <button class="btn-default" @click="colorMenu">COLOUR</button>
          </div>
          <div class="col-lg-3 col-6 title-filter text-center">
            <button class="btn-default" @click="shapeMenu">SHAPE</button>
          </div>
        </div>
      </div>
    </div>

    <div v-show="isColor"><Color @changeFilters="changeFilters" /></div>
    <div v-show="isShape"><Shape @changeFilters="changeFilters" /></div>

    <CurrentFilter
      v-if="colorsFilter.length || shapesFilter.length"
      :colors="colorsFilter"
      :shapes="shapesFilter"
      :quantityItem="quantityItem"
      @clear="clearFilter"
    />

    <div v-if="loader" class="wrapper">
      <Spinner />
    </div>
    <Table v-else :glasses="glasses"></Table>
  </div>
</template>

<script>
import Color from "./Color.vue";
import Shape from "./Shape.vue";
import Table from "./Table.vue";
import CurrentFilter from "./CurrentFilter.vue";
import { GlassesHelper } from "../../helper/GlassesHelper";
import Spinner from "../../components/Spinner";
import { mapGetters } from "vuex";
import Navigation from "../../components/Navigation.vue";

export default {
  components: {
    Color,
    Shape,
    Table,
    CurrentFilter,
    Navigation,
    Spinner,
  },
  mixins: [GlassesHelper],
  data() {
    return {
      isColor: false,
      isShape: false,
      loader: true,
      pageNumber: 1,
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapGetters("glasses", [
      "glasses",
      "shapesFilter",
      "colorsFilter",
      "currentCollection",
    ]),
    quantityItem() {
      return `${this.glasses.length} RESULTS ON THE PAGE`;
    },
  },
  methods: {
    colorMenu() {
      this.isColor = !this.isColor;
      this.isShape = false;
    },
    shapeMenu() {
      this.isShape = !this.isShape;
      this.isColor = false;
    },

    handleScroll() {
      const height = window.innerHeight + window.pageYOffset;
      if (height > document.body.offsetHeight + 14) {
        this.pageNumber += 1;
        this.getData("update");
      }
    },

    clearFilter() {
      this.$store.commit("glasses/CLEAR_COLORS_FILTER");
      this.$store.commit("glasses/CLEAR_SHAPES_FILTER");
      this.pageNumber = 1;
      this.getData();
    },
    changeFilters() {
      this.pageNumber = 1;
      this.getData();
    },

    getData(type) {
      const color = this.formatColors(this.colorsFilter);
      const shape = this.formatShapes(this.shapesFilter);
      const action =
        type === "update" ? "glasses/updateGlasses" : "glasses/getGlasses";

      this.$store
        .dispatch(action, {
          color: color,
          shape: shape,
          page: this.pageNumber,
          collection: this.currentCollection,
        })
        .then(() => {
          this.loader = false;
        })
        .catch((e) => {
          this.loader = false;
          console.log(e);
        });
    },
  },
};
</script>