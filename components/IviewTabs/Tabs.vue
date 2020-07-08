<!--
 * @Description: Tabs.vue
 * @Author: 李洋华
 * @Date: 2020-03-08 11: 04
 -->

<template>
  <Tabs v-model="name">
    <TabPane label="标签一" name="name1">
        <Content text="1" :name="name"></Content>
    </TabPane>
    <TabPane label="标签二" name="name2">
        <Content text=2 :name="name"></Content>

    </TabPane>
    <TabPane label="标签三" name="name3">
        <Content text="3" :name="name"></Content>
    </TabPane>
  </Tabs>
</template>

<script>
import Content from  './Content.vue'
export default {
  name: "IviewTabs",
  data() {
    return {
        name: 'name1'
    };
  },
  props: {},
  components: {Content},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss"></style>
