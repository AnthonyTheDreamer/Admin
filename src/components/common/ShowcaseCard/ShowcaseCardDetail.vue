<script setup>
defineOptions({
  name: 'ShowcaseCardDetail',
})

const { data } = defineProps({
  data: {
    type: Object,
    required: true
  },
  actionDisabled: {
    type: Boolean,
    default: false
  },
  hidePreTitle: {
    type: Boolean,
    default: false
  },
  hideAdminButtons: {
    type: Boolean,
    default: false
  }
})

const { id, title, date, description, link = null, logo = 'fa-solid fa-notdef' } = data

const handleLinkClick = () => {
  if (link) {
    window.open(link, '_blank')
  }
}
</script>

<template>
  <CCard class="h-100 p-3 user-select-none">
    <template v-if="!hidePreTitle">
      <slot name="preTitle">
        <div class="d-flex justify-content-end mb-3">
          <template v-if="link">
            <CButton class="border-0" :disabled="actionDisabled" color="primary" variant="ghost" @click="handleLinkClick">
              <FontAwesomeIcon icon="fa-solid fa-link" />
            </CButton>
          </template>
          <template v-if="!hideAdminButtons">
            <CButton class="border-0" :disabled="actionDisabled" color="secondary" variant="ghost" @click="$emit('onEdit', id)">
              <FontAwesomeIcon icon="fa-solid fa-pen" />
            </CButton>
            <CButton class="border-0" :disabled="actionDisabled" color="danger" variant="ghost" @click="$emit('onDelete', id)">
              <FontAwesomeIcon icon="fa-solid fa-trash" />
            </CButton>
          </template>
        </div>
      </slot>
    </template>
    <div class="text-center">
      <FontAwesomeIcon :icon="logo" size="6x" />
    </div>
    <CCardBody>
      <CCardTitle class="text-center">{{ title }}</CCardTitle>
      <CCardText class="text-center">{{ date }}</CCardText>
      <CCardText><small>{{ description }}</small>
      </CCardText>
    </CCardBody>
  </CCard>
</template>
