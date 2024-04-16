<script setup>
import { onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { RouterLink } from 'vue-router'
import { useColorModes } from '@coreui/vue'
import AppBreadcrumb from './AppBreadcrumb'
import AppHeaderDropdownAccnt from './AppHeaderDropdownAccnt'

defineOptions({
  name: 'AppHeader',
})

const headerClassNames = ref('mb-4 p-0')
const { colorMode, setColorMode } = useColorModes('coreui-free-vue-admin-template-theme')
const store = useStore()
const language = computed(() => store.state.language)

onMounted(() => {
  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 0) {
      headerClassNames.value = 'mb-4 p-0 shadow-sm'
    } else {
      headerClassNames.value = 'mb-4 p-0'
    }
  })
})

const setLanguage = (language) => {
  store.commit('setLanguage', language)
} 
</script>

<template>
  <CHeader position="sticky" :class="headerClassNames">
    <CContainer class="border-bottom px-4" fluid>
      <CHeaderToggler @click="$store.commit('toggleSidebar')" style="margin-inline-start: -14px">
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </CHeaderToggler>
      <CHeaderNav class="d-none d-md-flex">
        <RouterLink to="/dashboard" class="text-decoration-none">
          <CNavItem as="div" class="nav-link">
            Dashboard
          </CNavItem>
        </RouterLink>
      </CHeaderNav>

      <!-- TODO: split this as small component, use js file for better management -->
      <CHeaderNav class="ms-auto">
        <CDropdown variant="nav-item" placement="bottom-end">
          <CDropdownToggle :caret="false">
            <CAvatar v-if="language === 'vn'" color="danger"><span class="text-light">VN</span></CAvatar>
            <CAvatar v-else color="info"><span class="text-light">EN</span></CAvatar>
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem :active="language === 'en'" class="d-flex align-items-center" component="button"
              type="button" @click="setLanguage('en')">
              <CAvatar color="info"><span class="text-light">EN</span></CAvatar>
              <div class="ms-2">English</div>
            </CDropdownItem>
            <CDropdownItem :active="language === 'vn'" class="d-flex align-items-center" component="button"
              type="button" @click="setLanguage('vn')">
              <CAvatar color="danger"><span class="text-light">VN</span></CAvatar>
              <div class="ms-2">Tiếng Việt</div>
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CHeaderNav>

      <CHeaderNav>
        <li class="nav-item py-1">
          <div class="vr h-100 mx-2 text-body text-opacity-75"></div>
        </li>
        <CDropdown variant="nav-item" placement="bottom-end">
          <CDropdownToggle :caret="false">
            <FontAwesomeIcon v-if="colorMode === 'dark'" icon="fa-solid fa-moon" fixed-width />
            <FontAwesomeIcon v-else-if="colorMode === 'light'" icon="fa-solid fa-sun" fixed-width />
            <FontAwesomeIcon v-else icon="fa-solid fa-circle-half-stroke" fixed-width />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem :active="colorMode === 'light'" class="d-flex align-items-center" component="button"
              type="button" @click="setColorMode('light')">
              <FontAwesomeIcon class="me-2" icon="fa-solid fa-sun" fixed-width /> Light
            </CDropdownItem>
            <CDropdownItem :active="colorMode === 'dark'" class="d-flex align-items-center" component="button"
              type="button" @click="setColorMode('dark')">
              <FontAwesomeIcon class="me-2" icon="fa-solid fa-moon" fixed-width /> Dark
            </CDropdownItem>
            <CDropdownItem :active="colorMode === 'auto'" class="d-flex align-items-center" component="button"
              type="button" @click="setColorMode('auto')">
              <FontAwesomeIcon class="me-2" icon="fa-solid fa-circle-half-stroke" fixed-width /> Auto
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <li class="nav-item py-1">
          <div class="vr h-100 mx-2 text-body text-opacity-75"></div>
        </li>
        <AppHeaderDropdownAccnt />
      </CHeaderNav>
    </CContainer>
    <CContainer class="px-4" fluid>
      <AppBreadcrumb />
    </CContainer>
  </CHeader>
</template>