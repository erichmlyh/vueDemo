<!--
 * @Description: RxjsDemo.vue
 * @Author: 李洋华
 * @Date: 2020-03-09 17: 02
 -->

<template>
  <div class="rxjs-demo">
    <button ref="btn" type="primary">按钮点击</button>
  </div>
</template>

<script>
import { fromEvent, interval } from "rxjs";
import { scan, throttleTime, last, throttle, map, take } from "rxjs/operators";

export default {
  name: "RxjsDemo",
  data() {
    return {};
  },
  props: {},
  components: {},
  created() {
    // 每1秒发出值
    const source = interval(10).pipe(take(10));

    // 当 promise 解析时发出 source 的项
    const example = source.pipe(
      throttle(this.sleep),
      map(val => `Throttled off Promise: ${val}`)
    );

    const subscribe = example.subscribe(val => console.log(val));
  },
  mounted() {
    fromEvent(this.$refs.btn, "click")
      .pipe(throttle(() => this.sleep()))
      .subscribe(cunt => {
        console.log("hi");
      });
  },
  methods: {
    sleep(val) {
      console.log(val);
      return new Promise(resolve => {
        setTimeout(resolve, (10 - val) * 1000, val);
      });
    }
  }
};
</script>

<style scoped lang="scss"></style>
