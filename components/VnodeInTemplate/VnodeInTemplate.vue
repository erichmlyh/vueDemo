<!--
 * @Description: VnodeInTemplate.vue
 * @Author: 李洋华
 * @Date: 2019-12-27 14: 20
 -->

<template>
  <div class="VnodeInTemplate">
    <vnode :value="vnode" :dangerouslyUseHTML="true"></vnode>
  </div>
</template>

<script>
import Vnode from './Vnode'

export default {
  name: "VnodeInTemplate",
  data() {
    return {};
  },
  props: ["vnode"],
  components: {
    Vnode
  },
  
};
</script>
