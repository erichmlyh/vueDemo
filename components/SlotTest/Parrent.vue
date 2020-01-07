<!--
 * @Description: Parrent.vue
 * @Author: 李洋华
 * @Date: 2019-11-29 11: 42
 -->

<template>
  <div class="Parrent">
    <Child>
      <p>我是default slot</p>
      <p slot="name">我是name slot</p>
    </Child>
  </div>
</template>

<script>
import Child from "./Child";

export default {
  name: "Parrent",
  data() {
    return {};
  },
  props: {},
  components: {
    Child
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss"></style>
