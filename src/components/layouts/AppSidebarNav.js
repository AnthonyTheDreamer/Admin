import { defineComponent, h, onMounted, ref, resolveComponent } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { CBadge, CSidebarNav, CNavItem, CNavGroup, CNavTitle } from '@coreui/vue'
import nav from '@/configs/nav.js'

import simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'

import i18n from "@/i18n";
const { t } = i18n.global;

const normalizePath = (path) =>
  decodeURI(path)
    .replace(/#.*$/, '')
    .replace(/(index)?\.(html)$/, '')

const isActiveLink = (route, link) => {
  if (link === undefined) {
    return false
  }

  if (route.hash === link) {
    return true
  }

  const currentPath = normalizePath(route.path)
  const targetPath = normalizePath(link)

  return currentPath === targetPath
}

const isActiveItem = (route, item) => {
  if (isActiveLink(route, item.to)) {
    return true
  }

  if (item.items) {
    return item.items.some((child) => isActiveItem(route, child))
  }

  return false
}

const AppSidebarNav = defineComponent({
  name: 'AppSidebarNav',
  components: {
    CNavItem,
    CNavGroup,
    CNavTitle,
  },
  setup() {
    const route = useRoute()
    const firstRender = ref(true)

    onMounted(() => {
      firstRender.value = false
    })

    const renderItem = (item) => {
      if (item.items) {
        return h(
          CNavGroup,
          {
            as: 'div',
            compact: true,
            ...(firstRender.value && {
              visible: item.items.some((child) => isActiveItem(route, child)),
            }),
            class: 'user-select-none'
          },
          {
            togglerContent: () => [
              h(resolveComponent('FontAwesomeIcon'), {
                class: 'nav-icon',
                icon: item.icon,
              }),
              t(item.name),
            ],
            default: () => item.items.map((child) => renderItem(child)),
          },
        )
      }

      return item.to
        ? h(
          RouterLink,
          {
            to: item.to,
            class: 'text-decoration-none',
          },
          {
            default: ({ isActive, href, navigate }) =>
              h(
                resolveComponent(item.component),
                {
                  active: isActive,
                  as: 'div',
                  href: href,
                  onClick: () => navigate()
                },
                {
                  default: () => [
                    item.icon
                      ? h(resolveComponent('FontAwesomeIcon'), {
                        class: 'nav-icon',
                        icon: item.icon,
                      })
                      : h('span', { class: 'nav-icon' }, h('span', { class: 'nav-icon-bullet' })),
                      t(item.name),
                    item.badge &&
                    h(
                      CBadge,
                      {
                        class: 'ms-auto',
                        color: item.badge.color,
                      },
                      {
                        default: () => item.badge.text,
                      },
                    ),
                  ],
                },
              ),
          },
        )
        : h(
          resolveComponent(item.component),
          {
            as: 'div',
          },
          {
            default: () => t(item.name),
          },
        )
    }

    return () =>
      h(
        CSidebarNav,
        {
          as: simplebar,
        },
        {
          default: () => nav.map((item) => renderItem(item)),
        },
      )
  },
})
export { AppSidebarNav }
