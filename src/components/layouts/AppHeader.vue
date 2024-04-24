<script setup>
import { onMounted, ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useColorModes } from '@coreui/vue'
import AppBreadcrumb from './AppBreadcrumb'
import AppHeaderDropdownAccnt from './AppHeaderDropdownAccnt'
import { useUIStore } from '@/stores'
import { useI18n } from 'vue-i18n'
import { setLocaleStorage } from "@/utils/localStorage/locale"
import localeOptions from '@/configs/locale'

defineOptions({
  name: 'AppHeader',
})

const headerClassNames = ref('')
const { colorMode, setColorMode } = useColorModes('coreui-free-vue-admin-template-theme')

onMounted(() => {
  document.addEventListener('scroll', () => {
    headerClassNames.value = `${document.documentElement.scrollTop > 0 ? 'shadow-sm' : ''}`
  })
})

const { toggleSidebar, setTheme } = useUIStore()

const { locale } = useI18n({ useScope: 'global' })
const localeValue = computed(() => locale.getter())
const setLocale = (data) => {
  locale.value = data
  setLocaleStorage(data)
}

const setColor = (data) => {
  setColorMode(data)
  setTheme(data)

}
</script>

<template>
  <CHeader position="sticky" :class="`p-0 ${headerClassNames}`">
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

      <CHeaderNav class="ms-auto">
        <CDropdown variant="nav-item" placement="bottom-end">
          <CDropdownToggle :caret="false">
            <template v-for=' locale  in  localeOptions ' :key="locale.value">
              <CAvatar v-if="localeValue === locale.value" :color="locale.color">
                <span class="text-light">{{ locale.icon }}</span>
              </CAvatar>
            </template>
          </CDropdownToggle>
          <CDropdownMenu>
            <template v-for=' locale  in  localeOptions ' :key="locale.value">
              <CDropdownItem :active="localeValue === locale.value" class="d-flex align-items-center" component="button"
                type="button" @click="setLocale(locale.value)">
                <CAvatar :color="locale.color"><span class="text-light">{{ locale.icon }}</span></CAvatar>
                <div class="ms-2">{{ locale.title }}</div>
              </CDropdownItem>
            </template>
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
              type="button" @click="setColor('light')">
              <FontAwesomeIcon class="me-2" icon="fa-solid fa-sun" fixed-width /> {{ $t('common.light') }}
            </CDropdownItem>
            <CDropdownItem :active="colorMode === 'dark'" class="d-flex align-items-center" component="button"
              type="button" @click="setColor('dark')">
              <FontAwesomeIcon class="me-2" icon="fa-solid fa-moon" fixed-width /> {{ $t('common.dark') }}
            </CDropdownItem>
            <CDropdownItem :active="colorMode === 'auto'" class="d-flex align-items-center" component="button"
              type="button" @click="setColor('auto')">
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