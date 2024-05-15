<script setup>
import ResumeCard from '@/components/common/ResumeCard.vue';
import NavigateButton from '@/components/common/NavigateButton.vue';

defineOptions({
    name: 'ExperienceComponent',
})

const { readOnly } = defineProps({
    readOnly: {
        type: Boolean,
        default: false,
    },
})

const items = [
    {
        id: 1,
        year: '2020-2021',
        place: 'Otto',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempora, quidem eveniet rem corrupti tenetur fugit. Illum alias tempore sapiente reiciendis ut culpa repellendus recusandae voluptates! Repudiandae doloribus velit quam!',
    },
    {
        id: 2,
        year: '2021-2022',
        place: 'Orlando',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempora, quidem eveniet rem corrupti tenetur fugit. Illum alias tempore sapiente reiciendis ut culpa repellendus recusandae voluptates! Repudiandae doloribus velit quam!',
    },
    {
        id: 3,
        year: '2022-2023',
        place: 'New York',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempora, quidem eveniet rem corrupti tenetur fugit. Illum alias tempore sapiente reiciendis ut culpa repellendus recusandae voluptates! Repudiandae doloribus velit quam!',
    },
]
</script>

<template>
    <ResumeCard>
        <template #preTitle>
            <template v-if="readOnly">
                <div class="d-flex justify-content-end">
                    <NavigateButton pathName="Experience" />
                </div>
            </template>
        </template>
        <template #titleName>{{ $t('resume.experience.title') }}</template>
        <template #default>
            <CTable>
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell colspan="4" scope="col"></CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow v-if="!readOnly">
                        <CTableDataCell colspan="4">
                            <div class="d-flex justify-content-center">
                                <CButton type="button" color="secondary" size="lg" shape="rounded-circle"
                                    @click="console.log('clicked')">
                                    <FontAwesomeIcon icon="fa-solid fa-plus" />
                                </CButton>
                            </div>
                        </CTableDataCell>
                    </CTableRow>
                    <template v-for="item in items" :key="item.id">
                        <CTableRow>
                            <CTableDataCell>{{ item.year }}</CTableDataCell>
                            <CTableDataCell>{{ item.place }}</CTableDataCell>
                            <CTableDataCell>{{ item.description }}</CTableDataCell>
                            <CTableDataCell v-if="!readOnly" class="align-middle">
                                <CButton color="secondary" variant="ghost" @click="console.log('edit profile')">
                                    <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                                </CButton>
                            </CTableDataCell>
                        </CTableRow>
                    </template>
                </CTableBody>
            </CTable>
        </template>
    </ResumeCard>
</template>