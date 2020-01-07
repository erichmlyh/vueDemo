export default function(WrappedComponent) {
    return {
        props:
            typeof WrappedComponent === 'function' // accept both a construtor and an options object
                ? WrappedComponent.options.props
                : WrappedComponent.props,
        render(h) {
            // reduce all slots to a single array again.
            const slots = Object.keys(this.$slots).reduce(
                (arr, key) => [
                    ...arr,
                    h('template', {slot: key}, [this.$slots[key]])
                ],
                []
            );
            return h(
                WrappedComponent,
                {
                    attrs: this.$attrs,
                    props: this.$props,
                    on: this.$listeners
                },
                slots
            );
        }
    };
}
