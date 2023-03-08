<script setup>
import $ from 'jquery';
import { onMounted } from 'vue'

function loginOpen() {
    $(".btn").show("fast");
}

function loginClose() {
    $(".btn").hide("fast");
}

function colorTsf_red() {
    $(".nav_forum a").css("color", "red");
    $(".nav_study a").css("color", "black");
}

function colorTsf_black() {
    $(".nav_study a").css("color", "red");
    $(".nav_forum a").css("color", "black");
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
                <li class="nav_study">
                    <a href="javascript:;" @click="colorTsf_black" style="color: red">云课学习</a>
                </li>
                <li class="nav_forum">
                    <a href="javascript:;" @click="colorTsf_red">云课论坛</a>
                </li>
                <li class="nav_input">
                    <input type="search" name="" id=""  placeholder="请输入您想要查找的内容">
                </li>
            </ul>
        </div>
        <!-- Login -->
        <div class="login fr" @mouseleave="loginClose">
            <div class="btn fl">
                <a href="javascript:;">
                    登录/注册
                </a>
            </div>
            <img src="@img/会员注册登录管理.png" alt="" class="fr login_btn" @mouseover="loginOpen">
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
    height: 50px;
    /* background-color: pink; */
    border-bottom: 1px solid #ccc;
}
.header a img {
    width: 50px;
    height: 50px;
}
.header a h4 {
    text-align: center;
    line-height: 50px;
    font-size: 18px;
}
.nav ul {
    margin-left: 270px;
}
.nav ul li {
    float: left;
    font-size: 18px;
    padding: 0 15px;
}
.nav_study,
.nav_forum {
    margin-top: 10px;
}
.nav_study a {
    color: #000;
}
.nav_forum a {
    color: #000;
}
.nav_input {
    margin-top: 8px;
}
.nav ul li input {
    padding: 0 10px;
    height: 20px;
    width: 180px;
    border-radius: 10px;
    border: 1px solid #000;
}
.login {
    margin-top: 10px;
    margin-right: 10px;
    /* width: 106px;
    height: 30px; */
    border-radius: 10px;
    background-color: #ccc;
}
.btn {
    display: none;
    width: 70px;
    height: 30px;
}
.login a {
    float: left;
    display: block;
    line-height: 30px;
    text-align: center;
    padding-left: 4px;
}
.login_btn {
    width: 30px;
    height: 30px;
    border-radius: 10px;
    background-color: #ccc;
}
</style>