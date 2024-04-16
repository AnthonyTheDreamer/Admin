<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'
import { AppSidebarNav } from './AppSidebarNav'

defineOptions({
  name: 'AppSidebar',
})

const store = useStore()
const sidebarVisible = computed(() => store.state.sidebarVisible)
</script>

<template>
  <CSidebar class="border-end" colorScheme="dark" position="fixed" :visible="sidebarVisible" @visible-change="(event) =>
      $store.commit({
        type: 'updateSidebarVisible',
        value: event,
      })
    ">
    <CSidebarHeader class="border-bottom">
      <RouterLink custom to="/" v-slot="{ href, navigate }">
        <CSidebarBrand v-bind="$attrs" as="a" :href="href" @click="navigate" class="text-decoration-none">
          <h5 class="d-block m-0">Dreamer</h5>
        </CSidebarBrand>
      </RouterLink>
      <CCloseButton class="d-lg-none" dark @click="$store.commit('toggleSidebar')" />
    </CSidebarHeader>
    <AppSidebarNav />
  </CSidebar>
</template>