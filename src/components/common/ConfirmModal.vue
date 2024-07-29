<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'ConfirmModal',
})

const { something } = defineProps({
  something: {
    type: String,
    required: false,
  },

});

const visibleLiveDemo = ref(false)
</script>

<template>
  <CButton color="primary" @click="() => { visibleLiveDemo = true }">Launch demo modal</CButton>
  <CModal :visible="visibleLiveDemo" @close="() => { visibleLiveDemo = false }" backdrop="static" scrollable
    alignment="center" :keyboard="false">
    <CModalHeader :close-button="false">
      <CModalTitle>Confirm Delete</CModalTitle>
    </CModalHeader>
    <CModalBody>Are you sure you want to delete?</CModalBody>
    <CModalFooter>
      <CButton color="primary">Confirm</CButton>
      <CButton color="secondary" @click="() => { visibleLiveDemo = false }">
        Cancel
      </CButton>
    </CModalFooter>
  </CModal>
</template>
