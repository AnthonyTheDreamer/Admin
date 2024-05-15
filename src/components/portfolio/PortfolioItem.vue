<script setup>
import { defaultImage } from "@/utils/defaultData"

defineOptions({
    name: 'PortfolioItem',
})

const props = defineProps(['portfolio'])
const { id, title, image, link, createdAt, updatedAt, description, clicks, category } = props.portfolio
</script>

<template>
    <CCard role="button">
        <CCardImage orientation="top" :src="image" />
        <CCardBody>
            <CCardTitle>{{ title }}</CCardTitle>
            <CCardSubtitle class="mb-2 text-body-secondary">{{ category }}</CCardSubtitle>
            <CCardText>{{ description }}
            </CCardText>
        </CCardBody>
    </CCard>
</template>