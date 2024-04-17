import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import { createPinia } from "pinia";
const pinia = createPinia()

import CoreuiVue from '@coreui/vue'

import '../node_modules/nprogress/nprogress.css'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import icons from '@/assets/icons'
library.add(icons)

createApp(App)
    .use(router)
    .use(pinia)
    .use(CoreuiVue)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app')
