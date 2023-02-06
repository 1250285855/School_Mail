<script setup>
import jquery from 'jquery'

import router from '@/router'

import FootPrintWall from "@/views/FootPrintWall.vue"

// 点击加载动画并跳转到涂鸦墙
function forward() {
    jquery('#main').animate({
        height:"100vh"
    }, 1000)
    jquery('html, body').animate({
        scrollTop: jquery('#main').offset().top
    }, 1000)
    setTimeout(() => {
        router.push('/footprint')
    }, 1000)
}
</script>

<template>
<div></div>
<div id='main' @click="forward">
    <!-- 先显示部分涂鸦内容 -->
    <component :is="FootPrintWall"/>
</div>

</template>

<style scoped>

#main {
    display: flex;
    height: 600px;
}

</style>