<script setup>
defineOptions({
    name: 'FixedButton',
})

const { color, size, shape, textColor, disabled } = defineProps({
    color: {
        type: String,
        default: "success"
    },
    size: {
        type: String,
        default: "lg"
    },
    shape: {
        type: String,
        default: "rounded-circle"
    },
    textColor: {
        type: String,
        default: "light"
    },
    disabled: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: "fa-solid fa-plus"
    }
});

const emit = defineEmits(['onClick'])
</script>

<template>
    <div class="fixed-button position-fixed">
        <CButton type="button" :color="color" :size="size" :shape="shape" :disabled="disabled"
            :class="`text-${textColor}`" @click="emit('onClick')">
            <slot>
                <FontAwesomeIcon :icon="icon" />
            </slot>
        </CButton>
    </div>
</template>

<style class="scss" scoped>
.fixed-button {
    right: 2rem;
    bottom: 2rem;
    z-index: 10
}
</style>