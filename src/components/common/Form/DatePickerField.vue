<script setup>
import { useField } from 'vee-validate';
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

defineOptions({
  name: 'DatePickerField',
})

const { name, placeholder, disabled, format } = defineProps({
  name: {
    type: String,
    required: true
  },
  modelValue: String,
  placeholder: {
    type: String,
    required: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  format: {
    type: String,
    default: "dd/MM/yyyy"
  },
  invalid: {
    type: Boolean,
    default: false
  },
  feedbackInvalid: {
    type: String,
    required: false
  }
})

const { value } = useField(() => name, undefined, {
  syncVModel: true,
});
</script>

<template>
  <VueDatePicker v-model="value" :placeholder="placeholder" hide-input-icon :enable-time-picker="false" auto-apply
    :disabled="disabled" :format="format" :model-type="format">
    <template #dp-input="{ value }">
      <CFormInput readonly type="text" :value="value" :placeholder="placeholder" :invalid="invalid"
        :feedbackInvalid="feedbackInvalid" />
    </template>
  </VueDatePicker>
</template>
