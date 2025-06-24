<script setup>
import { ref } from 'vue'
import ResumeCard from "@/components/common/ResumeCard.vue";
import NavigateButton from '@/components/common/NavigateButton.vue';
import { SHOWCASE_CARD_CATEGORY, SHOWCASE_PAGE_STATE } from '@/configs/constants';
import ShowcaseCardCreateButton from '@/components/common/ShowcaseCard/ShowcaseCardCreateButton.vue';
import ShowcaseCardDetail from '@/components/common/ShowcaseCard/ShowcaseCardDetail.vue';
import ShowcaseCardForm from '@/components/common/ShowcaseCard/ShowcaseCardForm.vue';
import ConfirmModal from '@/components/common/ConfirmModal.vue'

defineOptions({
  name: 'AwardsComponent',
})

const { readOnly } = defineProps({
  readOnly: {
    type: Boolean,
    default: false,
  },
})

const { AWARDS } = SHOWCASE_CARD_CATEGORY
const { VIEW, ADD, EDIT } = SHOWCASE_PAGE_STATE
const currentState = ref(VIEW)
const currentCard = ref(null)

const awards = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  title: `Award Title ${i}`,
  date: '01/01/2024',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam est dolorum, sequi debitis inventore quisquam quis quam?`,
  link: 'https://google.com',
  logo: 'fa-solid fa-award'
}));

const changeState = (state) => {
  currentState.value = state
}

const changeCurrentCard = (id) => {
  currentCard.value = id
}

const closeForm = () => {
  changeState(VIEW)

  if (currentCard.value) {
    changeCurrentCard(null)
  }
}

const handleCancelForm = () => {
  closeForm()
}

const handleSubmitForm = (data, id = null) => {
  if (id) {
    // TODO: call edit api
    console.log("Edit", id, "with data:", data)
  } else {
    // TODO: call add api
    console.log("Add with data:", data)
  }

  closeForm()
}

const handleEdit = (id) => {
  if (currentState.value !== VIEW) {
    return;
  }

  changeCurrentCard(id)
  changeState(EDIT)
}

const handleDelete = (id) => {
  // TODO: delete confirm popup here
  console.log("Delete", id)
}
</script>

<template>
  <ConfirmModal />
  <ResumeCard>
    <template #preTitle>
      <template v-if="readOnly">
        <div class="d-flex justify-content-end">
          <NavigateButton pathName="Awards" />
        </div>
      </template>
    </template>
    <template #titleName>{{ $t('resume.awards.title') }}</template>
    <template #default>
      <CRow class="g-3">
        <template v-if="!readOnly">
          <template v-if="[VIEW, EDIT].includes(currentState)">
            <CCol :xs=12 :sm="6" :md="4" :xl="3">
                <ShowcaseCardCreateButton @onClick="changeState(ADD)" :disabled="[EDIT].includes(currentState)" />
              </CCol>
          </template>
          <template v-if="currentState === ADD">
            <CCol :xs=12 :sm="6" :md="4" :xl="3">
              <ShowcaseCardForm :category="AWARDS" @onSubmit="(data) => handleSubmitForm(data)"
                @onCancel="handleCancelForm" />
            </CCol>
          </template>
        </template>
        <template v-for="award in awards" :key="award.id">
          <CCol :xs=12 :sm="6" :md="4" :xl="3">
            <template v-if="currentState === EDIT && currentCard === award.id">
              <ShowcaseCardForm :category="AWARDS" @onSubmit="(data) => handleSubmitForm(data, award.id)"
                @onCancel="handleCancelForm" :data="award" />
            </template>
            <template v-else>
              <ShowcaseCardDetail :data="award" :hidePreTitle="readOnly"
                :actionDisabled="[ADD, EDIT].includes(currentState)" @onEdit="handleEdit" @onDelete="handleDelete" />
            </template>
          </CCol>
        </template>
      </CRow>
    </template>
  </ResumeCard>
</template>
