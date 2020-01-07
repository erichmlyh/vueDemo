<!--
 * @Description: BaseComponent.vue
 * @Author: 李洋华
 * @Date: 2020-01-07 11: 09
 -->
<template>
  <div class="base-component">
    <button @click="$emit('click', $event)">props: {{text}}</button>
    <slot></slot>
    <slot name="namedSlot" childToParent="fromBaseComponent.vue"></slot>
  </div>
</template>

<script>
export default {
 name: 'BaseComponent',
 props: {
   text: String
 }
}
</script>
