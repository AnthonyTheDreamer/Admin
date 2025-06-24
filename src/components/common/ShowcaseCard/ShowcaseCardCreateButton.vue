<script setup>
defineOptions({
  name: 'ShowcaseCardCreateButton',
})

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['onClick'])

const handleClick = () => {
  if (!props.disabled) {
    emit('onClick')
  }
}
</script>

<template>
  <CCard class="h-100" @click="handleClick">
    <div
      :class="`p-3 flex-grow-1 d-flex align-items-center justify-content-center ${props.disabled ? 'text-secondary' : ''}`"
      :role="props.disabled ? '' : 'button'">
      <FontAwesomeIcon icon="fa-solid fa-plus" size="6x" />
    </div>
  </CCard>
</template>
