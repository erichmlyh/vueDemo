<!--
 * @Description: PanoDemo.vue
 * @Author: 李洋华
 * @Date: 2019-12-03 11: 12
 -->

<template>
  <div class="pano-demo">
    <pano
      title="茶水间"
      width="720"
      height="480"
      bundle="./assets/pantry/"
      format="jpg"
    ></pano>
  </div>
</template>

<script>
import Pano from "vue-pano";
export default {
  name: "PanoDemo",
  data() {
    return {};
  },
  props: {},
  components: {
    Pano
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss"></style>
