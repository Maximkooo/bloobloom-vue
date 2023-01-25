<template>
  <div class="header">
    <div class="row">
      <div class="col-4 border-black"></div>
      <div class="col-4 text-center border-black title">Spectacles Women</div>
      <div class="col-4 border-black">
        <div class="row">
          <div class="col-3 title-filter text-center">
            <button class="btn-default" @click="colorClick">COLOUR</button>
          </div>
          <div class="col-3 title-filter text-center">
            <button class="btn-default" @click="shapeClick">SHAPE</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isColor"><Color /></div>
    <div v-if="isShape"><Shape /></div>
    <div>
      <Table></Table>
    </div>
  </div>
</template>

<script>
import Color from "./Color.vue";
import Shape from "./Shape.vue";
import Table from "./Table.vue";

export default {
  components: { Color, Shape, Table },
  data() {
    return {
      isColor: false,
      isShape: false,
    };
  },
  methods: {
    colorClick() {
      this.isColor = !this.isColor;
    },
    shapeClick() {
      this.isShape = !this.isShape;
    },
  },
};
</script>