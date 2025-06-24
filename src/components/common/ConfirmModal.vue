<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'ConfirmModal',
})

const { title, description, confirmLabel, cancelLabel } = defineProps({
  title: {
    type: String,
    required: false,
    default: 'common.confirmModal.delete.title'
  },
  description: {
    type: String,
    required: false,
    default: 'common.confirmModal.delete.description'
  },
  confirmLabel: {
    type: String,
    required: false,
    default: 'common.confirm'
  },
  cancelLabel: {
    type: String,
    required: false,
    default: 'common.cancel'
  },
});

const isVisible = ref(false)
</script>

<template>
  <CButton color="primary" @click="() => { isVisible = true }">Launch demo modal</CButton>
  <CModal :visible="isVisible" @close="() => { isVisible = false }" backdrop="static" scrollable
    alignment="center" :keyboard="false">
    <CModalHeader :close-button="false">
      <CModalTitle>{{ $t(title) }}</CModalTitle>
    </CModalHeader>
    <CModalBody>{{ $t(description) }}</CModalBody>
    <CModalFooter>
      <CButton color="primary">{{ $t(confirmLabel) }}</CButton>
      <CButton color="secondary" @click="() => { isVisible = false }">
        {{ $t(cancelLabel) }}
      </CButton>
    </CModalFooter>
  </CModal>
</template>
