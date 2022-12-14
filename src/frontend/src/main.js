import { createApp } from 'vue'

import router from './router'
import App from './App.vue'

import './assets/main.css'
import 'animate.css'

// 校函App
const app = createApp(App)
app.use(router)
app.mount('#app') 
