<script setup>
import ResumeCard from "@/components/common/ResumeCard.vue";
import NavigateButton from '@/components/common/NavigateButton.vue';

defineOptions({
    name: 'AwardsComponent',
})

const { readOnly } = defineProps({
    readOnly: {
        type: Boolean,
        default: false,
    },
})

const awards = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    title: `Award Title ${i}`,
    time: '01/01/2024',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam est dolorum, sequi debitis inventore quisquam quis quam? Veritatis odio sunt
            provident consequatur, fugiat nobis porro, quis distinctio possimus, dignissimos eveniet!
            Quibusdam est dolorum, sequi debitis inventore quisquam quis quam? Veritatis odio sunt
            provident consequatur, fugiat nobis porro, quis distinctio possimus, dignissimos
            eveniet!`,
    link: 'https://google.com'
}));
</script>

<template>
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
                <CCol :xs=12 :sm="6" :md="4" :xl="3">
                    Add award
                </CCol>
                <template v-for="award in awards" :key="award.id">
                    <CCol :xs=12 :sm="6" :md="4" :xl="3">
                        {{ award.title }}
                    </CCol>
                </template>
            </CRow>
        </template>
    </ResumeCard>
</template>