import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import {createPinia} from 'pinia'
const pinia = createPinia()

import { createApp } from 'vue'
import App from './App.vue'



const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
app.use(pinia)
app.mount('#app')
