<!--
 * @Description: VuexDemo.vue
 * @Author: 李洋华
 * @Date: 2020-04-07 14: 31
 -->

<template>
  <div class="VuexDemo">
    <p>{{ storeA }}</p>
    <el-button @click="handleClick">change a</el-button>
  </div>
</template>

<script>
import Vue from "vue";

const state = {a: 'a'}
const $store = new Vue({
  data: {
      state
    },
});
export default {
  name: "VuexDemo",
  data() {
    return {
      storeA: $store.state,
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    handleClick() {
      $store.state.a= "xx" + Math.random();
    },
  },
};
</script>

<style scoped lang="scss"></style>
