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
        component: () => import('@/views/Login_Register.vue')
    },
    {
        path: '/register',
        name: 'Register',
        keepAlive: false,
        component: () => import('@/views/Register.vue'),
    },
    {
        path: '/footprint',
        name: 'Footprint',
        keepAlive: false,
        component: () => import('@/views/FootPrintWall.vue')
    },
    {
        path: '/printcanvas',
        name: 'PrintCanvas',
        keepAlive: false,
        component: () => import('@/views/PrintCanvas.vue')
    },
    {
        path: '/404',
        name: '404',
        keepAlive: false,
        component: () => import('@/views/NotFound.vue')
    },
    {
        path: '/study',
        name: '/study',
        keepAlive: false,
        component: () => import('@/views/Study.vue')
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