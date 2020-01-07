
// 未遂
export default function(WrappedComponent) {
  return {
    props:
      typeof WrappedComponent === "function" // accept both a construtor and an options object
        ? WrappedComponent.options.props
        : WrappedComponent.props,
    render(h) {
      return h('div',[h(WrappedComponent,{tag:"component"})]);
    }
  };
}
