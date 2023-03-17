<script setup>
import { onMounted } from 'vue'
import router from '@/router'

function openMain() {
    router.push('/')
}

onMounted(() => {

})
</script>

<template>

<div id='main'>
    <div class="header">
        <div class="w">
            <!-- Logo -->
            <a href="javascript:;">
                <img src="@img/IDEC_CE_Logo.png" alt="" class="fl">
                <h4 class="fl
                ">计算机科学与技术云课</h4>
            </a>
            <!-- Nav -->
            <div class="nav fl">
                <ul>
                    <li class="nav_main">
                        <a href="javascript:;" @click="openMain">首页</a>
                    </li>
                    <li class="nav_study">
                        <a href="javascript:;" @click="colorTsf_black">云课学习</a>
                    </li>
                    <li class="nav_forum">
                        <a href="javascript:;" @click="colorTsf_red">云课论坛</a>
                    </li>
                </ul>
            </div>
            <!-- Login -->
            <div class="login fr">
                <span>
                    <img src="@img/Enter-2登录.png" alt="">
                    登录
                </span>
                <div class="top"></div>
                <div class="right"></div>
                <div class="bottom"></div>
                <div class="left"></div>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>
.fl {
    float: left;
}
.fr {
    float: right;
}
/* 把我们所有标签的内外边距清零 */
* {
    margin: 0;
    padding: 0;
    /* css3盒子模型 */
    /* css3的盒子模型不需要害怕padding值和边框的设置大小值撑大盒子的大小 */
    box-sizing: border-box;
}
/* em 和 i 斜体的文字不倾斜 */
em,
i {
    font-style: normal
}
/* 去掉li 的小圆点 */
li {
    list-style: none
}

img {
    /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
    border: 0;
    /* 取消图片底侧有空白缝隙的问题 */
    vertical-align: middle
}

button {
    /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
    cursor: pointer
}

a {
    color: #666;
    text-decoration: none
}

a:hover {
    color: #c81623
}

button,
input {
    /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
    font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    /* 手动去除默认灰色边框 */
    border: 0; 
    outline: none;
}

body {
    /* CSS3 抗锯齿形 让文字显示的更加清晰 */
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    color: #666
}

.hide,
.none {
    display: none
}
/* 清除浮动 */
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}

.clearfix {
    *zoom: 1
}
.w {
    width: 1300px;
    margin: 0 auto;
}
.all {
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.header {
    margin-top: 10px;
    height: 50px;
    background-color: #1e1e20;
    /* border-bottom: 1px solid white; */
}
.header a img {
    width: 50px;
    height: 50px;
}
.header a h4 {
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    color: #c99a55;
}
.nav ul {
    margin-left: 500px;
}
.nav ul li {
    float: left;
    font-size: 18px;
    padding: 0 15px;
}
.nav_study,
.nav_forum,
.nav_main {
    margin-top: 10px;
}
.nav_main a {
    color: rgba(255, 255, 245, .86);
}
.nav_study a {
    color: rgba(255, 255, 245, .86);
}
.nav_forum a {
    color: rgba(255, 255, 245, .86);
}
.nav_study a:hover {
    color: #c99a55;
}
.nav_forum a:hover {
    color: #c99a55;
}
.nav_main a:hover {
    color: #c99a55;
}
/* .break {
    width: 3px;
    border: 1px solid #c99a55;
} */
.nav_input {
    margin-top: 8px;
}
.nav ul li input {
    padding: 0 10px;
    height: 20px;
    width: 180px;
    border-radius: 10px;
    color: #fff;
    background-color: #191919;
    border: 1px solid #c99a55;
}
/* .login {
    margin-top: 8px;
    margin-right: 10px;
    width: 115px;
    height: 38px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #161618;
} */
.login {
    position: relative;
    margin-top: 4px;
    padding: 8px 40px 8px 32px;
    cursor: pointer;
    transition: 0.5s all;
    border-radius: 10px;
    background-color: #161618;
}

.login span {
    color: rgba(255, 255, 245, .86);;
    font-size: 16px;
}

.login span img {
    height: 20px;
    width: 20px;
}

.login:hover {
    box-shadow: inset 0px 0px 25px #ff7700;
}

.login:active {
    margin-top: 305px;
    transition: 0.2s all;
    box-shadow: inset 0px 0px 25px #ffb676;
}

.login div {
    transition: 0.5s all;
    position: absolute;
    background-color: #ff7700;
    box-shadow: 0 0 15px #ff7700, 0 0 30px #ff7700, 0 0 50px #ff7700;
}

.login .top {
    width: 15px;
    height: 2px;
    top: 0;
    left: 0;
}

.login .bottom {
    width: 15px;
    height: 2px;
    bottom: 0;
    right: 0;
}

.login .left {
    width: 2px;
    height: 15px;
    top: 0;
    left: 0;
}

.login .right {
    width: 2px;
    height: 15px;
    bottom: 0;
    right: 0;
}

.login:hover .top,
.login:hover .bottom {
    width: 100%;
}

.login:hover .left,
.login:hover .right {
    height: 100%;
}
</style>