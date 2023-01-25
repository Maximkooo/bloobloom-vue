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
    <div v-if="isColor"><Color @colorFilter="changeColor" /></div>
    <div v-if="isShape"><Shape @shapeFilter="changeShape" /></div>

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
    };
  },
  created() {
    this.getData();
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
      this.getData(params);
    },

    changeShape(filter) {
      const params = this.formatShapes(filter);
      this.getData(params);
    },

    async getData(payload) {
      console.log(payload);
      const apiData = await getGlasses(payload);
      this.loader = false;
      this.glasses = apiData.data.glasses;
    },
  },
};
</script>