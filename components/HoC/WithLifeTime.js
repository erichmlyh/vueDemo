export default function WithLifeTime(WrappedComponent) {
  return {
    mounted() {
      this._startTime = +new Date();
    },
    props: WrappedComponent.props, // 不申明props,实例化时，this.$props将是空对象
    destroyed() {
      console.log(
        `该组件的生命周期时长为： ${+new Date() - this._startTime}ms`
      );
    },
    render(h) {
      // 将 this.$scopedSlots 格式化为数组
      const children = Object.keys(this.$scopedSlots)
        .reduce((arr, key) => arr.concat(this.$scopedSlots[key]()), [])
        .map(vnode => {
          vnode.context = this._self;
          return vnode;
        });

      return h(
        WrappedComponent,
        {
          on: this.$listeners,
          attrs: this.$attrs,
          props: this.$props
        },
        children
      );
    }
  };
}
