<!--
 * @Description: Child.vue
 * @Author: 李洋华
 * @Date: 2019-12-12 09: 12
 -->
<!--
<template>
  <div class="Child">
    i'm child: {{data}}
  </div>
</template>
 -->

<script>
export default {
  name: "Child",
  data() {
    return {};
  },
  updated() {
    console.log("child updated");
  },
  props: ["data"],
  watch: {
    data(val) {
      console.log(val);
    }
  },
  components: {},
  mounted() {},
  methods: {},
  render(h) {
    console.log("childRender")
    return <div className="Child">i'm child: {this.data}</div>;
  }
};
</script>

<style scoped lang="scss"></style>
