<script setup>
import { onMounted, ref } from 'vue'
import router from '@/router'
import { BreadcrumbItem } from './AppBreadcrumbItem'

defineOptions({
  name: 'AppBreadcrumb',
})

const breadcrumbs = ref()

const getBreadcrumbs = () => {
  return router.currentRoute.value.matched.map((route) => {
    return {
      active: route.path === router.currentRoute.value.fullPath,
      name: route.meta?.title || route.name,
      path: `${router.options.history.base}${route.path}`,
    }
  })
}

console.log(router.currentRoute.value.matched.map(route => console.log(route)))

router.afterEach(() => {
  breadcrumbs.value = getBreadcrumbs()
})

onMounted(() => {
  breadcrumbs.value = getBreadcrumbs()
})
</script>

<template>
  <CBreadcrumb class="my-0">
    <BreadcrumbItem v-for="item in breadcrumbs" :key="item" :to="item.active ? '' : item.path" :active="item.active">
      {{ $t(item.name) }}
    </BreadcrumbItem>
  </CBreadcrumb>
</template>