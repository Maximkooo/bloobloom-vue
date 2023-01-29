<template>
  <div class="header">
    <div class="row">
      <div class="col-4 border-black"></div>
      <div class="col-4 text-center border-black title">Spectacles Women</div>
      <div class="col-4 border-black">
        <div class="row">
          <div class="col-3 title-filter text-center">
            <button class="btn-default" @click="colorMenu">COLOUR</button>
          </div>
          <div class="col-3 title-filter text-center">
            <button class="btn-default" @click="shapeMenu">SHAPE</button>
          </div>
        </div>
      </div>
    </div>

    <div v-show="isColor"><Color @changeFilters="getData" /></div>
    <div v-show="isShape"><Shape @changeFilters="getData" /></div>

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
// import { getGlasses } from "../../api/index";
import { GlassesHelper } from "../../helper/GlassesHelper";
import Spinner from "../../components/Spinner";
import { mapGetters } from "vuex";

export default {
  components: {
    Color,
    Shape,
    Table,
    CurrentFilter,
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
        this.getNewPageData();
      }
    },

    clearFilter() {
      // this.colorsFilter = [];
      this.$store.commit("glasses/CLEAR_COLORS_FILTER");
      this.$store.commit("glasses/CLEAR_SHAPES_FILTER");
      this.getData();
    },

    async getNewPageData() {
      const color = this.formatColors(this.colorsFilter);
      const shape = this.formatShapes(this.shapesFilter);
      // const apiData = await getGlasses(color, shape, this.pageNumber);
      // apiData.data.glasses.map((i) => this.glasses.push(i));

      this.$store
        .dispatch("glasses/updateGlasses", {
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

    getData() {
      const color = this.formatColors(this.colorsFilter);
      const shape = this.formatShapes(this.shapesFilter);
      this.pageNumber = 1;
      this.$store
        .dispatch("glasses/getGlasses", {
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