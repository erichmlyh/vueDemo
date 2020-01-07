<!--
 * @Description: 利用setimeout探究异步组件
 * @Author: 李洋华
 * @Date: 2019-12-30 10: 28
 -->

<template>
  <div class="AsyncComponent">
    <async-instance v-if="show"></async-instance>
    <el-button @click="show = !show"> toggle </el-button>
  </div>
</template>

<script>
export default {
  name: "AsyncComponent",
  data() {
    return {
      show: false
    };
  },
  props: {},
  components: {
    AsyncInstance: function(resolve) {
      setTimeout(() => {
        resolve({
          render(h) {
            return h("div", "i'm AsyncInstance");
          }
        });
      }, 1000);
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss"></style>
