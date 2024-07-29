<script setup>
defineOptions({
  name: 'BlogTag',
})

const { name } = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const color = 'primary'
</script>

<template>
  <CBadge :color="color" shape="rounded-pill">{{ name }}</CBadge>
</template>
