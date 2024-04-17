import { createApp } from 'vue'
import App from '@/App.vue'

import router from '@/router'

import { createPinia } from "pinia";
const pinia = createPinia()

import CoreuiVue from '@coreui/vue'

import '../node_modules/nprogress/nprogress.css'

import i18n from "@/i18n";
import Toast from "vue-toastification";

// font awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/assets/icons'

const app = createApp(App)

app.use(pinia)
    .use(router)
    .use(CoreuiVue)
    .use(i18n)
    .use(Toast, import('@/configs/toast'))
    .component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
