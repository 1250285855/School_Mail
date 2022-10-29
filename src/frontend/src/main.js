import { createApp } from 'vue'
import App from './App.vue'
import School_Mail from './School_Mail.vue'
import Header_tln from './views/Header_tln.vue'

import './assets/main.css'

// Vue 默认欢迎页面
// createApp(App).mount('#app')

// 校函App
createApp(Header_tln).mount('#app')
