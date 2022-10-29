import { createRouter, createWebHashHistory } from 'vue-router'

import School_Mail from '@/views/School_Mail.vue'
import Login from '@/views/Login.vue'

const routes = [
    {
        path: '/',
        name: 'School_Mail',
        component: School_Mail,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router