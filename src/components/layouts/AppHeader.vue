<script setup>
import { onMounted, ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useColorModes } from '@coreui/vue'
import AppBreadcrumb from './AppBreadcrumb'
import AppHeaderDropdownAccnt from './AppHeaderDropdownAccnt'
import { useUIStore } from '@/stores'
import { useI18n } from 'vue-i18n'
import { setLocaleStorage } from "@/utils/localStorage/locale"

defineOptions({
  name: 'AppHeader',
})

const headerClassNames = ref('mb-4 p-0')
const { colorMode, setColorMode } = useColorModes('coreui-free-vue-admin-template-theme')

onMounted(() => {
  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 0) {
      headerClassNames.value = 'mb-4 p-0 shadow-sm'
    } else {
      headerClassNames.value = 'mb-4 p-0'
    }
  })
})

const { toggleSidebar } = useUIStore()

const { locale } = useI18n({ useScope: 'global' })
const localeValue = computed(() => locale.getter())
const setLocale = (data) => {
  locale.value = data
  setLocaleStorage(data)
}
</script>

<template>
  <CHeader position="sticky" :class="headerClassNames">
    <CContainer class="border-bottom px-4" fluid>
      <CHeaderToggler @click="toggleSidebar" style="margin-inline-start: -14px">
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </CHeaderToggler>
      <CHeaderNav class="d-none d-md-flex">
        <RouterLink to="/dashboard" class="text-decoration-none">
          <CNavItem as="div" class="nav-link">
            {{ $t('dashboard.title') }}
          </CNavItem>
        </RouterLink>
      </CHeaderNav>

      <!-- TODO: split this as small component, use js file for better management -->
      <CHeaderNav class="ms-auto">
        <CDropdown variant="nav-item" placement="bottom-end">
          <CDropdownToggle :caret="false">
            <CAvatar v-if="localeValue === 'vi'" color="danger"><span class="text-light">VN</span></CAvatar>
            <CAvatar v-else color="info"><span class="text-light">EN</span></CAvatar>
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem :active="localeValue === 'en'" class="d-flex align-items-center" component="button"
              type="button" @click="setLocale('en')">
              <CAvatar color="info"><span class="text-light">EN</span></CAvatar>
              <div class="ms-2">English</div>
            </CDropdownItem>
            <CDropdownItem :active="localeValue === 'vi'" class="d-flex align-items-center" component="button"
              type="button" @click="setLocale('vi')">
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
              <FontAwesomeIcon class="me-2" icon="fa-solid fa-sun" fixed-width /> {{ $t('common.light') }}
            </CDropdownItem>
            <CDropdownItem :active="colorMode === 'dark'" class="d-flex align-items-center" component="button"
              type="button" @click="setColorMode('dark')">
              <FontAwesomeIcon class="me-2" icon="fa-solid fa-moon" fixed-width /> {{ $t('common.dark') }}
            </CDropdownItem>
            <CDropdownItem :active="colorMode === 'auto'" class="d-flex align-items-center" component="button"
              type="button" @click="setColorMode('auto')">
              <FontAwesomeIcon class="me-2" icon="fa-solid fa-circle-half-stroke" fixed-width /> {{ $t('common.auto') }}
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