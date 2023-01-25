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
    <div v-show="isColor"><Color @colorFilter="changeColor" /></div>
    <div v-show="isShape"><Shape @shapeFilter="changeShape" /></div>
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
import { getGlasses } from "../../api/index";
import { GlassesHelper } from "../../helper/GlassesHelper";
import Spinner from "../../components/Spinner";

export default {
  components: { Color, Shape, Table, Spinner },
  mixins: [GlassesHelper],
  data() {
    return {
      isColor: false,
      isShape: false,
      glasses: [],
      loader: true,
      pageNumber: 1,
      payload: "",
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
  methods: {
    colorMenu() {
      this.isColor = !this.isColor;
      this.isShape = false;
    },
    shapeMenu() {
      this.isShape = !this.isShape;
      this.isColor = false;
    },

    changeColor(filter) {
      const params = this.formatColors(filter);
      this.payload = params;
      this.getData();
    },

    changeShape(filter) {
      const params = this.formatShapes(filter);
      this.payload = params;
      this.getData();
    },

    handleScroll() {
      const height = window.innerHeight + window.pageYOffset;
      if (height > document.body.offsetHeight + 14) {
        this.getNewPageData();
      }
    },

    async getNewPageData() {
      this.pageNumber += 1;
      const apiData = await getGlasses(this.payload, this.pageNumber);
      apiData.data.glasses.map((i) => this.glasses.push(i));
    },

    async getData() {
      this.pageNumber = 1
      const apiData = await getGlasses(this.payload, this.pageNumber);
      this.glasses = apiData.data.glasses;
      this.loader = false;
    },
  },
};
</script>