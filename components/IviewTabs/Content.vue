<!--
 * @Description: Content.vue
 * @Author: 李洋华
 * @Date: 2020-03-08 11: 10
 -->

<template>
  <div class="Content">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {};
  },
  props: {
    text: String
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss"></style>
