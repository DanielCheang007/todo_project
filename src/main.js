import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'

import { router } from './router.js'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')
