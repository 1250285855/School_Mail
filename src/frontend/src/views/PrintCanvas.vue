<script setup>
import { onMounted } from 'vue';

import router from '@/router'

onMounted(() => {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = new URL('../assets/js/PrintCanvas.js', import.meta.url).href;
    document.body.appendChild(script);
})

function exit() {
    router.push('/footprint')
}

</script>

<template>
<div></div>
<div id="main">
<canvas id="canvas"></canvas>
   <!--  <div class="bg-btn"></div>
    <div class="color-group" id="bgGroup">
        <h3>选择背景颜色:</h3>
        <ul class="clearfix">
            <li class="bgcolor-item" style="background-color: blue;"></li>
            <li class="bgcolor-item" style="background-color: black;"></li>
            <li class="bgcolor-item" style="background-color: #FF3333;"></li>
            <li class="bgcolor-item" style="background-color: #0066FF;"></li>
            <li class="bgcolor-item" style="background-color: #FFFF33;"></li>
            <li class="bgcolor-item" style="background-color: #33CC66;"></li>
            <li class="bgcolor-item" style="background-color: gray;"></li>
            <li class="bgcolor-item" style="background-color: #F34334;"></li>
            <li class="bgcolor-item" style="background-color: #fff;box-shadow: 0 1px 2px 0 rgba(32,33,36,0.28);"></li>
            <li class="bgcolor-item" style="background-color: #9B27AC;"></li>
            <li class="bgcolor-item" style="background-color: #4CB050;"></li>
            <li class="bgcolor-item" style="background-color: #029688;"></li>
        </ul>
        <i class="closeBtn"></i>
    </div> -->
    <div class="tools">
        <div class="container">
            <button @click="exit" class="exit" id="exit" title="退出">退出</button>
            <button class="save"  id="save" title="保存"></button>
            <button class="brush active" id="brush" title="画笔"></button>
            <button class="eraser" id="eraser" title="橡皮擦"></button>
            <button class="clear" id="clear" title="清屏"></button>
            <button class="undo"  id="undo" title="撤销"></button>
            <button class="redo"  id="redo" title="再做"></button>
        </div>
    </div>
    <div class="pen-detail" id="penDetail">
        <i class="closeBtn"></i>
        <!-- <p>笔类型</p>
        <ul class="pen-type clearfix">
            <li class="pen"></li>
            <li class="line"></li>
            <li class="circle"></li>
            <li class="rect"></li>
        </ul> -->
        <p>笔大小</p>
        <span class="circle-box"><i id="thickness"></i></span> <input type="range" id="range1" min="1" max="10" value="1">
        <p>笔颜色</p>
        <ul class="pen-color clearfix">
            <li class="color-item active" style="background-color: black;"></li>
            <li class="color-item" style="background-color: #FF3333;"></li>
            <li class="color-item" style="background-color: #99CC00;"></li>
            <li class="color-item" style="background-color: #0066FF;"></li>
            <li class="color-item" style="background-color: #FFFF33;"></li>
            <li class="color-item" style="background-color: #33CC66;"></li>
        </ul>
        <p>不透明度</p>
        <i class="showOpacity"></i> <input type="range" id="range2" min="1" max="10" value="1">
    </div>
</div>
</template>

<style src="@css/PrintCanvas.css" scoped ></style>
<style scoped>
#main {
    display: flex;
    background-color: white;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
}
.container #exit {
    justify-content: center;
    align-items: center;
}
</style>