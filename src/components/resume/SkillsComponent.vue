<script setup>
import ResumeCard from '@/components/common/ResumeCard.vue';
import NavigateButton from '@/components/common/NavigateButton.vue';

defineOptions({
    name: 'SkillsComponent',
})

const { readOnly } = defineProps({
    readOnly: {
        type: Boolean,
        default: false,
    },
})

const skills = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    title: `Skill Title ${i}`,
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
                    <NavigateButton pathName="Skills" />
                </div>
            </template>
        </template>
        <template #titleName>{{ $t('resume.skills.title') }}</template>
        <template #default>
            <CRow class="g-3">
                <CCol :xs=12 :sm="6" :md="4" :xl="3">
                    Add Skill
                </CCol>
                <template v-for="skill in skills" :key="skill.id">
                    <CCol :xs=12 :sm="6" :md="4" :xl="3">
                        {{ skill.title }}
                    </CCol>
                </template>
            </CRow>
        </template>
    </ResumeCard>
</template>