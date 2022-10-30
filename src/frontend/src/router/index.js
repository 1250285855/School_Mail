import { createRouter, createWebHistory } from 'vue-router'

// router 教程: https://router.vuejs.org/zh/guide/#javascript
const routes = [
    {
        path: '/',
        name: 'School_Mail',
        keepAlive: false,
        component: () => import('@/views/School_Mail.vue')
    },
    {
        path: '/login',
        name: 'Login',
        keepAlive: false,
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        keepAlive: false,
        component: () => import('@/views/Register.vue'),
    },
    {
        path: '/404',
        name: '404',
        keepAlive: false,
        component: () => import('@/views/NotFound.vue')
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