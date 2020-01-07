<!--
 * @Description: Link.vue
 * @Author: 李洋华
 * @Date: 2019-12-31 12: 55
 -->

<script>
export default {
  name: "Link",
  render(h) {
    return (
      <p>
        导出正在执行，请前往
        <router-link to={{ path: "/foo" }} type="primary">
          任务列表
        </router-link>
        跟踪进度
      </p>
    );
  }
};
</script>
