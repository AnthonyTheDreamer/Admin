<script setup>
import { useRouter } from 'vue-router';

defineOptions({
    name: 'NavigateButton',
})

const router = useRouter();

const { pathName, color, variant, shape, disabled, icon } = defineProps({
    pathName: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: "secondary"
    },
    variant: {
        type: String,
        default: "ghost"
    },
    shape: {
        type: String,
        default: "rounded-circle"
    },
    disabled: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: "fa-solid fa-eye"
    }
});
</script>

<template>
    <CButton :color="color" :variant="variant" :shape="shape" :disabled="disabled"
        @click="router.push({ name: pathName })">
        <slot>
            <FontAwesomeIcon :icon="icon" />
        </slot>
    </CButton>
</template>
