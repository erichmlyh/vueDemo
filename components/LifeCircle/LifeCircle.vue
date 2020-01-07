<!--
 * @Description: LifeCircle.vue
 * @Author: 李洋华
 * @Date: 2019-12-12 09: 12
 -->
<!--
<template>
  <div class="LifeCircle">
    <el-button @click="other = 'changeOther'">改变其他参数</el-button>
    <el-button @click="objData = { key: 'changeObjData' }"
      >改变objData</el-button
    >
    <el-button @click="strData = 'changestrData'">改变strData</el-button>
    <hr />
    {{ other }}
    <hr />
    <Child :data="{ key: 'i\'m object' }"></Child>
    <Child data="only string"></Child>
    <Child :data="`val string`"></Child>
    <Child :data="objData"></Child>
    <Child :data="strData"></Child>
    <hr />
    <p>{{new Date}}</p>
  </div>
</template>
 -->

<script>
import Child from "./Child";

export default {
  name: "LifeCircle",
  data() {
    return {
      other: "other",
      objData: { key: "objData" },
      strData: "strData"
    };
  },
  props: {},
  components: {
    Child
  },
  mounted() {},
  methods: {},
  updated() {
  },
  render() {
    const self = this;
    return this._c(
      "div",
      { staticClass: "LifeCircle" },
      [
        this._c(
          "el-button",
          {
            on: {
              click: function() {
                self.other = "changeOther";
              }
            }
          },
          [this._v("改变其他参数")]
        ),
        this._c(
          "el-button",
          {
            on: {
              click: function() {
                self.objData = { key: "changeObjData" };
              }
            }
          },
          [this._v("改变objData")]
        ),
        this._c(
          "el-button",
          {
            on: {
              click: function() {
                self.strData = "changestrData";
              }
            }
          },
          [this._v("改变strData")]
        ),
        this._c("hr"),
        this._v(this._s(this.other)),
        this._c("hr"),
        this._c("Child", { props: { data: { key: "i'm object" } } }),
        this._c("Child", { props: { data: "only string" } }),
        this._c("Child", { props: { data: `val string` } }),
        this._c("Child", { props: { data: this.objData } }),
        this._c("Child", { props: { data: this.strData } }),
        this._c("hr"),
        this._c("p", [this._v(this._s(new Date()))])
      ],
      1
    );
  }
};
</script>

<style scoped lang="scss"></style>
