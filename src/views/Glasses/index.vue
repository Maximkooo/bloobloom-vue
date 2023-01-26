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

    <div v-show="isColor"><Color @colorsFilter="changeFilters" /></div>
    <div v-show="isShape"><Shape @shapesFilter="changeFilters" /></div>
    {{ shapesFilter }}
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
import { getGlasses } from "../../api/index";
import { GlassesHelper } from "../../helper/GlassesHelper";
import Spinner from "../../components/Spinner";
import { TYPE_OF_FILTER } from "../../helper/constants";

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
      glasses: [],
      loader: true,
      pageNumber: 1,
      colorsFilter: [],
      shapesFilter: [],
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
    quantityItem() {
      return `${this.glasses.length} RESULTS ON PAGE`;
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

    changeFilters(filter, type) {
      if (type === TYPE_OF_FILTER.COLOR) {
        this.colorsFilter = filter;
      } else {
        this.shapesFilter = filter;
      }
      this.getData();
    },

    handleScroll() {
      const height = window.innerHeight + window.pageYOffset;
      if (height > document.body.offsetHeight + 14) {
        this.pageNumber += 1;
        this.getNewPageData();
      }
    },

    clearFilter() {
      this.colorsFilter = [];
      this.shapesFilter = [];
      this.getData();
    },

    async getNewPageData() {
      const color = this.formatColors(this.colorsFilter);
      const shape = this.formatShapes(this.shapesFilter);
      const apiData = await getGlasses(color, shape, this.pageNumber);
      apiData.data.glasses.map((i) => this.glasses.push(i));
    },

    async getData() {
      const color = this.formatColors(this.colorsFilter);
      const shape = this.formatShapes(this.shapesFilter);
      this.pageNumber = 1;
      const apiData = await getGlasses(color, shape, this.pageNumber);
      this.glasses = apiData.data.glasses;
      this.loader = false;
    },
  },
};
</script>