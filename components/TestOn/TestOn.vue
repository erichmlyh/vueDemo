<!--
 * @Description: TestOn.vue
 * @Author: 李洋华
 * @Date: 2020-02-06 20: 17
 -->

<template>
  <div class="TestOn">
    <Child @on-data-loaded="handleLoaded"></Child>
  </div>
</template>

<script>
import Child from "./Child";

export default {
  name: "TestOn",
  data() {
    return {};
  },
  props: {},
  components: {
    Child
  },
  mounted() {},
  methods: {
    handleLoaded(e) {
      console.log("TestOn");
    }
  }
};
</script>

<style scoped lang="scss"></style>
