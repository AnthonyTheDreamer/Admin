<script setup>
import { RouterLink } from 'vue-router'
import { AppSidebarNav } from './AppSidebarNav'
import { useUIStore } from '@/store/ui'
import { storeToRefs } from 'pinia'

defineOptions({
  name: 'AppSidebar',
})

const store = useUIStore()
const { sidebarVisible } = storeToRefs(store)
const { updateSidebarVisible, toggleSidebar } = store
</script>

<template>
  <CSidebar class="border-end" colorScheme="dark" position="fixed" :visible="sidebarVisible"
    @visible-change="(event) => updateSidebarVisible(event)">
    <CSidebarHeader class="border-bottom">
      <RouterLink custom to="/" v-slot="{ href, navigate }">
        <CSidebarBrand v-bind="$attrs" as="a" :href="href" @click="navigate" class="text-decoration-none">
          <h5 class="d-block m-0">Dreamer</h5>
        </CSidebarBrand>
      </RouterLink>
      <CCloseButton class="d-lg-none" dark @click="toggleSidebar" />
    </CSidebarHeader>
    <AppSidebarNav />
  </CSidebar>
</template>