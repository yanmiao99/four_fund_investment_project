import { createApp } from 'vue'
import "reset.css"
import App from './App.vue'
import router from './router'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowUp, faArrowDown, faExternalLinkAlt, faEdit, faEye, faPlus, faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowUp, faArrowDown, faExternalLinkAlt, faEdit, faEye, faPlus, faArrowLeft, faTrash)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(ArcoVue)
app.use(router)
app.mount('#app')
