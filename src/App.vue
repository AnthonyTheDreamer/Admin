<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>
<script setup>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useColorModes } from '@coreui/vue'

const { isColorModeSet, setColorMode } = useColorModes(
  'coreui-free-vue-admin-template-theme',
)
const store = useStore()

onBeforeMount(() => {
  const urlParams = new URLSearchParams(window.location.href.split('?')[1])
  const theme =
    urlParams.get('theme') &&
    urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
  if (theme) {
    setColorMode(theme)
    return
  }

  if (isColorModeSet()) {
    return
  }

  setColorMode(store.getters['ui/theme'])
})
</script>

<style lang="scss">
// Import Main styles for this application
@import 'styles/style';

.route-enter-from,
.route-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
}
</style>
