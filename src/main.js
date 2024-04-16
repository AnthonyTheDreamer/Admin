import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'

import '../node_modules/nprogress/nprogress.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import icons from '@/assets/icons'
/* add icons to the library */
library.add(icons)

const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
