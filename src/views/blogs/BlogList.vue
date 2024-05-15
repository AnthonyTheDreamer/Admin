<script setup>
import { useRouter } from 'vue-router';
import BlogItem from '@/components/blogs/BlogItem'
import FixedButton from '@/components/common/FixedButton.vue';
import { defaultImage } from "@/utils/defaultData"

defineOptions({
    name: 'BlogList',
})

const router = useRouter()

const imagesTest = ['https://placehold.co/800x450', 'https://placehold.co/450x800', 'https://placehold.co/450x450']

const blogs = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    title: `Long Title ${i}`,
    image: imagesTest[i % imagesTest.length],
    author: 'Cong Anh Nguyen',
    updatedAt: '31/12/2024',
    createdAt: '01/01/2024',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam est dolorum, sequi debitis inventore quisquam quis quam? Veritatis odio sunt
            provident consequatur, fugiat nobis porro, quis distinctio possimus, dignissimos eveniet!
            Quibusdam est dolorum, sequi debitis inventore quisquam quis quam? Veritatis odio sunt
            provident consequatur, fugiat nobis porro, quis distinctio possimus, dignissimos
            eveniet!`,
    views: 1000,
    tags: ['blog', 'text', 'something']
}));
</script>

<template>
    <div>
        <FixedButton @click="router.push({ name: 'BlogWrite' })" />

        <div class="d-grid gap-3">
            <template v-for="blog in blogs" :key="blog.id">
                <BlogItem :blog="blog" />
            </template>
        </div>
    </div>
</template>

<style class="scss" scoped>
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