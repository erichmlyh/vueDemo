<!--
 * @Description: Vnode.vue
 * @Author: 李洋华
 * @Date: 2019-12-27 14: 40
 -->
<script>
import { Fragment } from "vue-fragment";

export default {
  name: "Vnode",
  props: ["value", "dangerouslyUseHTML"],
  render(h) {
    return h(
          Fragment,
          {
            domProps: {
              [this.dangerouslyUseHTML
                ? "innerHTML"
                : "textContent"]: this.value
            }
          },
          [this.value]
        )
  }
};
</script>

<style scoped lang="scss"></style>
