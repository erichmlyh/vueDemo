<!--
 * @Description: DepTime.vue
 * @Author: 李洋华
 * @Date: 2020-02-26 19: 07
 -->

<template>
  <div class="DepTime">
    <p>点【更改name】会console.log什么？</p>
    <p>点【toggle show】后，点【更改name】会console.log什么？</p>
    <p>点【toggle show】两次后，点【更改name】会console.log什么？</p>
    <hr>
    <p>将v-if改成v-show之后，上面三个问题是什么？</p>

    <div v-show="show">
        我的名字：{{aliasName}}
    </div>
    <el-button type="primay" @click="name=Math.random()">更改name</el-button>
    <el-button type="primay" @click="show=!show">toggle show</el-button>
  </div>
</template>

<script>
export default {
 name: 'DepTime',
  data() {
    return {
        show: false,
        name: '1'
    }
  },
  computed: {
      aliasName() {
          console.log("name");
          return  this.name
      }
  },
}
</script>

<style scoped lang="scss">

</style>
