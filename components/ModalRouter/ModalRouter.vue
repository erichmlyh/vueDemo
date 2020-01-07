<!--
 * @Description: ModalRouter.vue
 * @Author: 李洋华
 * @Date: 2019-12-30 15: 42
 -->

<template>
  <div class="ModalRouter"></div>
</template>

<script>
export default {
  name: "ModalRouter",
  data() {
    return {};
  },
  props: {},
  mounted() {
    this.$Modal.confirm({
      render: h => {
        return (
          <div>
            <p>xxx</p>
          </div>
        );
      }
    });
  },
  methods: {}
};
</script>

<style scoped lang="scss"></style>
