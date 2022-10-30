import { createApp } from 'vue'

import router from './router'
import App from './App.vue'
import School_Mail from './School_Mail.vue'
import Header_tln from './views/Header_tln.vue'

import './assets/main.css'

// Vue 默认欢迎页面
// createApp(App).mount('#app')

// 校函App
const app = createApp(App)
app.use(router)
app.mount('#app') 

// createApp(Login).mount('#app')
