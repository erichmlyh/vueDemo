<script>
export default {
  name: "Child",
  render(h) {
    return h("p", {}, [
      ...this.$scopedSlots.default(),
      ...this.$scopedSlots.name({ a: "b" })
    ]);
  }
};
</script>
