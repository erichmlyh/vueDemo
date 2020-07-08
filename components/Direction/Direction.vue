<!--
 * @Description: Direction.vue
 * @Author: 李洋华
 * @Date: 2020-07-08 09: 55
 -->

<template>
  <div class="direction">
    <p v-if="show" v-log="'click test'">test</p>
    <el-button @click="show = !show" type="primary">隐藏/显示</el-button>
  </div>
</template>

<script>
import Vue from 'vue';
import vLog from './vLog';
Vue.use(vLog)

export default {
 name: 'Direction',
  data() {
    return {
        show: true
    }
  },
  props: {},
  components: {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss">

</style>
