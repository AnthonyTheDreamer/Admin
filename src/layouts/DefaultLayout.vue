<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100">
      <AppHeader />
      <div class="body flex-grow-1">
        <CContainer class="px-4" lg>
          <router-view v-slot="slotProps">
            <transition name="route" mode="out-in">
              <component :is="slotProps.Component"></component>
            </transition>
          </router-view>
        </CContainer>
      </div>
      <AppFooter />
    </div>
  </div>
</template>
<script setup>
import { CContainer } from '@coreui/vue'
import AppFooter from '@/components/layouts/AppFooter.vue'
import AppHeader from '@/components/layouts/AppHeader.vue'
import AppSidebar from '@/components/layouts/AppSidebar.vue'

defineOptions({
  name: 'DefaultLayout',
})
</script>
