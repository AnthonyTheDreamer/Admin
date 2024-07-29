<script setup>
import { computed, reactive, toRaw } from 'vue'
import { SHOWCASE_CARD_CATEGORY } from '@/configs/constants';
import { Form, Field } from 'vee-validate';
import { object, string } from 'yup';
import { AWARDS_LOGOS, CERTIFICATIONS_LOGOS, SKILLS_LOGOS } from '@/configs/logos'
import DatePickerField from "@/components/common/Form/DatePickerField"

defineOptions({
  name: 'ShowcaseCardForm',
})

const { data, category } = defineProps({
  data: {
    type: [Object, null],
    default: null
  },
  category: {
    type: String,
    required: true
  },
})
const { AWARDS, CERTIFICATIONS, SKILLS } = SHOWCASE_CARD_CATEGORY

const logos = computed(() => {
  switch (category) {
    case AWARDS:
      return AWARDS_LOGOS
    case CERTIFICATIONS:
      return CERTIFICATIONS_LOGOS
    case SKILLS:
      return SKILLS_LOGOS
    default:
      return []
  }
})

const form = reactive({
  title: data?.title || '',
  date: data?.date || '',
  link: data?.link || '',
  description: data?.description || '',
  logo: data?.logo || logos.value?.[0]?.style || 'fa-solid fa-notdef',
})

const schema = object({
  title: string().trim().required("validate.common.required"),
  date: string().trim().required("validate.common.required"),
  link: string().trim().url("validate.common.url"),
  description: string().trim().required("validate.common.required"),
});

const emit = defineEmits(['onCancel', 'onSubmit'])

const onCancelClick = () => {
  // TODO: call confirm popup here
  emit('onCancel')
}

const onSubmit = () => {
  // TODO: validate here
  // TODO: call confirm popup here
  console.log(toRaw(form))
  emit('onSubmit', toRaw(form))
}
</script>

<template>
  <Form as="CForm" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
    <CCard class="h-100 p-3">
      <slot name="preTitle">
        <div class="d-flex justify-content-end mb-3">
          <CButton class="border-0" color="success" variant="ghost" type="submit">
            <FontAwesomeIcon icon="fa-solid fa-check" />
          </CButton>
          <CButton class="border-0" color="secondary" variant="ghost" @click="onCancelClick">
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </CButton>
        </div>
      </slot>
      <div class="text-center">
        <FontAwesomeIcon :icon="form.logo" size="6x" />
      </div>
      <CCardBody>
        <div class="mb-3">
          <Field name="logo" as="CFormSelect" v-model="form.logo">
            <option :value="'fa-solid fa-notdef'" disabled>{{ $t('common.form.logo') }}</option>
            <template v-for="logo in logos" :key="logo.name">
              <option :value="logo.style">{{ logo.name }}
              </option>
            </template>
          </Field>
        </div>

        <div class="mb-3">
          <Field name="title" as="CFormInput" v-model="form.title" :placeholder="$t('common.form.title')"
            :invalid="!!errors?.title" :feedbackInvalid="$t(errors?.title || '')" />
        </div>

        <div class="mb-3">
          <DatePickerField name="date" v-model="form.date" :placeholder="$t('common.form.date')" :invalid="!!errors?.date"
          :feedbackInvalid="$t(errors?.date || '')" />
        </div>

        <div class="mb-3">
          <Field name="link" as="CFormInput" v-model="form.link" :placeholder="$t('common.form.link')"
            :invalid="!!errors?.link" :feedbackInvalid="$t(errors?.link || '')" />
        </div>

        <div class="mb-3">
          <Field name="description" as="CFormTextarea" v-model="form.description" rows="3"
            :placeholder="$t('common.form.description')" :invalid="!!errors?.description"
            :feedbackInvalid="$t(errors?.description || '')" />
        </div>
      </CCardBody>
    </CCard>
  </Form>
</template>
