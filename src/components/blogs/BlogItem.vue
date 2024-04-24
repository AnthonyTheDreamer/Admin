<script setup>
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';
import BlogTag from '@/components/blogs/BlogTag.vue';

defineOptions({
    name: 'BlogItem',
})

const props = defineProps(['blog'])
const router = useRouter();
const { id, title, image, author, updatedAt = null, createdAt, content, views, tags } = props.blog
</script>

<template>
    <CCard role="button" class="rounded-4 user-select-none overflow-hidden">
        <CRow>
            <CCol xs="4">
                <div class="w-100 h-100 d-flex justify-content-center align-items-center">
                    <CCardImage class="rounded-0 w-100 h-100 object-fit-cover" :src="image" />
                </div>
            </CCol>
            <CCol xs="8">
                <CCardBody class="h-100 d-flex flex-column">
                    <div class="d-flex">
                        <CCardTitle class="flex-grow-1">{{ title }}</CCardTitle>
                        <CButton color="secondary" variant="ghost" size="sm" class="blog-button"
                            @click="router.push({ name: 'BlogEdit', params: { id } })">
                            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                        </CButton>
                    </div>
                    <CCardText class="mb-2">
                        <small class="text-body-secondary">
                            {{ author }} {{ updatedAt ? `(${$t('common.updated')}: ${updatedAt})` : '' }}
                        </small>
                    </CCardText>
                    <div class="mb-2">
                        <template v-for="(tag, index) in tags" :key="tag">
                            <BlogTag :name="tag" :class="`${index != Object.keys(tags).length - 1 ? 'me-2' : ''}`" />
                        </template>
                    </div>
                    <div class="flex-grow-1">
                        <CCardText class="content-text">
                            {{ content }}
                        </CCardText>
                    </div>
                    <CRow class="mt-3">
                        <CCol xs="6">
                            <CCardText>
                                <small class="text-body-secondary">
                                    <FontAwesomeIcon icon="fa-solid fa-clock" /> {{ createdAt }}
                                </small>
                            </CCardText>
                        </CCol>
                        <CCol xs="6">
                            <CCardText class="text-end">
                                <small class="text-body-secondary">
                                    <FontAwesomeIcon icon="fa-solid fa-eye" /> {{ views }}
                                </small>
                            </CCardText>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCol>
        </CRow>
        <RouterLink :to="{ name: 'BlogDetail', params: { id } }" class="stretched-link" />
    </CCard>
</template>

<style class="scss" scoped>
.blog-button {
    z-index: 100
}

.content-text {
    @supports (-webkit-line-clamp: 3) {
        white-space: initial;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 1.5em;
    max-height: calc(1.5em * 3);
}
</style>