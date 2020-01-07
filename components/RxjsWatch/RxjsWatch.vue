<!--
 * @Description: RxjsWatch.vue
 * @Author: 李洋华
 * @Date: 2019-11-21 14: 11
 -->

<template>
  <div class="rxjs-watch">
    <p>watchedIndex: {{ watchedIndex }}</p>
    <p>responsedIndex: {{ responsedIndex }}</p>
  </div>
</template>

<script>
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

export default {
  name: "RxjsWatch",
  data() {
    return {
      watchedIndex: 0,
      responsedIndex: undefined,
      iterator: null
    };
  },
  watch: {
    watchedIndex(val) {
      if (this.iterator && this.iterator.next) {
        this.fakeAjax(val).then(response => {
          this.iterator.next(response);
        });
      }
    }
  },
  props: {},
  components: {},
  mounted() {
    new Observable(iterator => {
      this.iterator = iterator;
    })
      .pipe(filter(response => response === this.watchedIndex))
      .subscribe(this.handleResponse);

    // 随机定时触发n个watchedIndex的变化
    const random = (n = 5) => {
      if (n <= 0) {
        return;
      }
      setTimeout(() => {
        this.watchedIndex++;
        random(n - 1);
      }, Math.random() * 1000);
    };
    random();
  },
  methods: {
    fakeAjax(index) {
      return new Promise(resolve => {
        setTimeout(resolve, Math.random() * 3000, index);
      });
    },
    handleResponse(response) {
      this.responsedIndex = response;
    }
  }
};
</script>
