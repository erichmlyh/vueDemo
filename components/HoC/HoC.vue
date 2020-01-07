<!--
 * @Description: HoC.vue
 * @Author: 李洋华
 * @Date: 2020-01-07 15: 13
 -->

<template>
  <div class="hoc" style="margin: 50px;">
    <base-component text="baseComponent">
      <p>baseComponent 默认插槽</p>
      <template v-slot:namedSlot="{childToParent}">
        <p>baseComponent 具名插槽; {{ childToParent }}</p>
      </template>
    </base-component>
    <hr />
    <wrapper-base-component text="wrapperBaseComponent">
      <p>wrapperBaseComponent 默认插槽</p>
      <template v-slot:namedSlot="{childToParent}">
        <p>wrapperBaseComponent 具名插槽; {{ childToParent }}</p>
      </template>
    </wrapper-base-component>
  </div>
</template>

<script>
import BaseComponent from "./BaseComponent.vue";
import WithLifeTime from "./WithLifeTime";

export default {
  name: "Hoc",
  components: {
    BaseComponent,
    WrapperBaseComponent: WithLifeTime(BaseComponent)
  }
};
</script>
