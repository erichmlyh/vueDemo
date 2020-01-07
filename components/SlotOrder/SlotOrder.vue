<!--
 * @Description: SlotOrder.vue
 * @Author: 李洋华
 * @Date: 2020-01-06 16: 57
 -->

<template>
  <div class="SlotOrder">
    <has-slot>
      <div v-if="child1">child 1</div>
      <div v-if="child2">child 2</div>
      <div v-if="child3">child 3</div>
    </has-slot>
  </div>
</template>

<script>
import HasSlot from "./HasSlot";

export default {
  name: "SlotOrder",
  data() {
    return {
      child1: false,
      child2: false,
      child3: false
    };
  },
  props: {},
  components: {
      HasSlot
  },
  mounted() {
    setTimeout(() => {
      this.child3 = true;
    }, 1000);
    setTimeout(() => {
      this.child2 = true;
    }, 2000);
    // setTimeout(() => {
    //   this.child1 = true
    // },3000);
  },
  methods: {}
};
</script>

<style scoped lang="scss"></style>
