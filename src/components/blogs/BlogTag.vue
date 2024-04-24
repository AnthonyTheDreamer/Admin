<script setup>
defineOptions({
    name: 'BlogTag',
})


const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const { name } = props

const color = 'primary'
</script>

<template>
    <CBadge :color="color" shape="rounded-pill">{{ name }}</CBadge>
</template>