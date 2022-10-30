import { createRouter, createWebHistory } from 'vue-router'

import School_Mail from '@/views/School_Mail.vue'
import Login from '@/views/Login.vue'
import NotFound from '@/views/NotFound.vue'

// router 教程: https://router.vuejs.org/zh/guide/#javascript
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
    },
    {
        path: '/404',
        name: '404',
        component: NotFound,
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router