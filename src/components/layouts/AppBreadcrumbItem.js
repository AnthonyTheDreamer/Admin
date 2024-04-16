import { defineComponent, h } from 'vue'
import { RouterLink } from 'vue-router'

const BreadcrumbItem = defineComponent({
    name: 'BreadcrumbItem',
    props: {
        /**
         * Toggle the active state for the component.
         */
        active: Boolean,
        /**
         * The `href` attribute for the inner link component.
         */
        to: String,
    },

    setup(props, { slots }) {
        return () =>
            h(
                'li',
                {
                    class: [
                        'breadcrumb-item',
                        {
                            active: props.active,
                        },
                    ],
                    ...(props.active && { 'aria-current': 'page' }),
                },
                props.to
                    ? h(RouterLink, { to: props.to }, slots.default && slots.default())
                    : slots.default && slots.default(),
            )
    },
})
export { BreadcrumbItem }