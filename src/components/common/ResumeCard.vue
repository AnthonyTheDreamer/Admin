<script setup>
defineOptions({
    name: 'ResumeCard',
})

const { hideTitle } = defineProps({
    hideTitle: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <CCard class="rounded-0">
        <CCardBody class="p-5">
            <slot name="preTitle"> </slot>
            <template v-if="!hideTitle">
                <slot name="title">
                    <div class="text-center mb-5">
                        <h2>
                            <span class="px-3 py-2 border-bottom border-3 border-primary">
                                <slot name="titleName">
                                    Insert Title Here
                                </slot>
                            </span>
                        </h2>
                    </div>
                </slot>
            </template>
            <slot name="postTitle"></slot>

            <slot></slot>
        </CCardBody>
    </CCard>
</template>