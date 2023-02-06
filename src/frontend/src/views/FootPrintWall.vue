<script setup>
import jquery from 'jquery'
import PrintCanvas from '@/views/PrintCanvas.vue';

import router from '@/router'

function goPrintCanvas() {
    router.push('/printcanvas')
}

</script>

<template>
<div></div>
<!-- 完整涂鸦板 -->
<div id='main'>
    <div id="title">
        <text>欢迎来到涂鸦墙，每个人都可以在这里留下自己的足迹</text>
    </div>
    <div class="content">
        <!-- <text>这里就会是用户涂鸦的内容</text> -->
        <button @click="goPrintCanvas">点击开始自己的DIY</button>
    </div>
</div>

</template>

<style scoped>

#main {
    flex-direction: column;
    display: flex;
    background-color: white;
    min-height: 100vh;
    min-width: 100vw;
    align-items: center;
}

#title {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    background-color: white;
}
#title text {
    font-size: 40px;
    font-weight: bold;
    color: black;
}

.content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 300px;
    background-color: transparent;
}
.content text {
    font-size: 30px;
    font-weight: bold;
    color: black;
}
.content button {
    position: fixed;
    bottom: 200px;
    justify-content: center;
    font-size: 20px;
    height: 50px;
    width: 200px;
    color: black;
    background-color: transparent;
    border: 1px solid gray;
    border-radius: 20px;
    padding: 10px;
    cursor: pointer;
}
.content button:hover {
    background-color: gray;
    color: white;
}

</style>