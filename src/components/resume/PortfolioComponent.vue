<script setup>
import PortfolioItem from '@/components/portfolio/PortfolioItem.vue';
import FixedButton from '@/components/common/FixedButton.vue';
import NavigateButton from '@/components/common/NavigateButton.vue';
import ResumeCard from "@/components/common/ResumeCard.vue";

defineOptions({
    name: 'PortfolioComponent',
})

const { readOnly } = defineProps({
    readOnly: {
        type: Boolean,
        default: false,
    },
})

const imagesTest = ['https://placehold.co/800x450', 'https://placehold.co/450x800', 'https://placehold.co/450x450']

const portfolios = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    title: `Long Title ${i}`,
    image: imagesTest[i % imagesTest.length],
    link: 'https://google.com',
    createdAt: '01/01/2024',
    updatedAt: '01/01/2024',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam est dolorum, sequi debitis inventore quisquam quis quam? Veritatis odio sunt
            provident consequatur, fugiat nobis porro, quis distinctio possimus, dignissimos eveniet!
            Quibusdam est dolorum, sequi debitis inventore quisquam quis quam? Veritatis odio sunt
            provident consequatur, fugiat nobis porro, quis distinctio possimus, dignissimos
            eveniet!`,
    clicks: 1000,
    category: 'web'
}));
</script>

<template>
    <ResumeCard>
        <template #preTitle>
            <template v-if="readOnly">
                <div class="d-flex justify-content-end">
                    <NavigateButton pathName="Portfolio" />
                </div>
            </template>
        </template>

        <template #titleName>
            {{ $t('resume.portfolio.title') }}
        </template>
        <template #default>
            <FixedButton v-if="!readOnly" @onClick="console.log('clicked')" />

            <div class="mb-4 d-flex justify-content-center">
                <CButtonGroup role="group">
                    <CFormCheck type="radio" :button="{ color: 'primary', variant: 'outline' }" name="btnradio"
                        id="btnradio1" autocomplete="off" label="All" checked />
                    <CFormCheck type="radio" :button="{ color: 'primary', variant: 'outline' }" name="btnradio"
                        id="btnradio2" autocomplete="off" label="Web" />
                    <CFormCheck type="radio" :button="{ color: 'primary', variant: 'outline' }" name="btnradio"
                        id="btnradio3" autocomplete="off" label="Game" />
                    <CFormCheck type="radio" :button="{ color: 'primary', variant: 'outline' }" name="btnradio"
                        id="btnradio4" autocomplete="off" label="Blog" />
                </CButtonGroup>
            </div>

            <CRow class="g-3">
                <template v-for="portfolio in portfolios" :key="portfolio.id">
                    <CCol :xs=12 :sm="6" :md="4" :xl="3">
                        <PortfolioItem :portfolio="portfolio" />
                    </CCol>
                </template>
            </CRow>
        </template>
    </ResumeCard>
</template>