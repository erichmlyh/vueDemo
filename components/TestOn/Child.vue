<!--
 * @Description: Child.vue
 * @Author: 李洋华
 * @Date: 2020-02-06 20: 18
 -->

<template>
  <div class="Child">
    <span @click="handleClick">点我触发事件</span>
  </div>
</template>

<script>
export default {
  name: "Child",
  data() {
    return {};
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    handleClick() {
        console.log('Child');
        
      const eventStr = "on-data-loaded";
      this.$emit(eventStr, eventStr);
    }
  }
};
</script>

<style scoped lang="scss"></style>
