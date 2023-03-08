<script setup>
import $ from 'jquery'
import { ref } from 'vue';
const emit = defineEmits('Clicked')

function close() {
    emit('Clicked')
}

function navOpen() {
    $(".download_information").fadeIn("slow");
    $(".download_nav_btn1").css("color", "red");
    $(".download_nav_btn2").css("color", "white");
    $(".download_file").css("display", "none");
}

function fileOpen() {
    $(".download_file").fadeIn("slow");
    $(".download_nav_btn2").css("color", "red");
    $(".download_nav_btn1").css("color", "white");
    $(".download_information").css("display", "none");
}

const fileDownload = ref([
    {
        id: 0,
        filename: "文件名称1",
        download: '下载',
        information: '详情'
    },
    {
        id: 1,
        filename: "文件名称2",
        download: '下载',
        information: '详情'
    },
    {
        id: 2,
        filename: "文件名称3",
        download: '下载',
        information: '详情'
    },
    {
        id: 3,
        filename: "文件名称4",
        download: '下载',
        information: '详情'
    },
    {
        id: 4,
        filename: "文件名称5",
        download: '下载',
        information: '详情'
    }
])
</script>

<template>
    <div class="clanguage">
            <div class="window">
                <!-- header -->
                <div class="clanguage_header">
                    <!-- logo -->
                    <a href="javascript:;" class="fl title_btn" @click="close">
                        <div class="clogo fl">
                            <img src="@img/数据结构.png" alt="">
                        </div>
                        <div class="ctitle fl">
                            <h4>数据结构</h4>
                            <h5>CYP.MAT160M.S2022</h5>
                        </div>
                    </a>
                    <a href="javascript:;" class="fr">
                        <div class="shutdown" @click="close">
                            <img src="@img/叉叉.png" alt="">
                        </div>
                    </a>
                </div>
                <!-- main -->
                <div class="cmain">
                    <!-- Teacher -->
                    <div class="teacher fl">
                        <div class="information">
                            <img src="@img/个人信息.png" alt="" class="fl">
                            <h3>蔡远征</h3>
                        </div>
                    </div>
                    <!-- Download -->
                    <div class="download">
                        <div class="download_nav">
                            <ul>
                                <li><a href="javascript:;" class="download_nav_btn1" @click="navOpen" style="color: red;">课程简介</a></li>
                                <li><a href="javascript:;" class="download_nav_btn2" @click="fileOpen">课程文件</a></li>
                            </ul>
                        </div>
                        <div class="download_file">
                            <ul>
                                <li v-for="item in fileDownload" :key="item.id">
                                    <div class="filename fl">
                                        {{ item.filename }}
                                    </div>
                                    <div class="download_btn fr">
                                        <a href="javascript:;">{{ item.download }}</a>
                                        <a href="javascript:;">{{ item.information }}</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="download_information">
                            <div class="text fl">
                                <p>
                                    数据结构是计算机科学教育中的一门必修课程。这门课程主要是介绍数据结构及其相关操作的算法. 本课程将使用C++程序设计语言和面向对象技术来实现各种数据结构。它的内容包括：算法分析、抽象数据类型、数组、表、栈、递归、广义表、队列和优先队列、树、搜索树和平衡搜索树、集合、散列和散列表、排序、图和图的算法。通过对本课程的学习，要求学生掌握数据结构的基本概念和知识，并可用任何计算机语言实现这些数据结构，为今后的软件开发工作打下扎实的基础。
                                </p>
                            </div>
                            <div class="picture fl">
                                <img src="@img/c语言课程简介.png" alt="">
                            </div>
                        </div>
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
.clanguage,
.math {
    /* display: none; */
    margin: 50px auto;
    width: 1600px;
    height: 734px;
    border-radius: 15px;
    background-position: center;
}
.clanguage {
    background-image: url("@img/编程.png");
    background-size: 1600px 743px;
}
.math {
    background-image: url("@img/高等数学背景.jpg");
}
.window {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    backdrop-filter: blur(5px);
}
.clanguage_header {
    width: 100%;
    height: 70px;
    border-radius: 15px 15px 0 0;
    border-bottom: 1px solid #a6a6a6;
}
.clogo {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 15px;
    margin-left: 15px;
    margin-top: 5px;
    background-color: #fff;
}
.clogo img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
}
.ctitle {
    margin-left: 10px;
}
.ctitle h4 {
    padding-top: 7px;
    font-size: 20px;
}
.ctitle h5 {
    font-size: 14px;
}
.shutdown {
    width: 40px;
    height: 40px;
    margin: 17px;
}
.shutdown img {
    width: 38px;
    height: 38px;
}
.cmain {
    width: 1550px;
    height: 650px;
    margin: 0 auto;
}
.teacher {
    height: 100%;
    width: 300px;
    border-right: 1px solid #a6a6a6;
}
.information {
    margin-top: 20px;
}
.information img {
    width: 60px;
    height: 60px;
}
.information h3 {
    float: left;
    margin-top: 6px;
    margin-left: 50px;
    font-size: 30px;
    color: #fff;
}
.download {
    float: left;
    width: 1210px;
    height: 100%;
    margin-left: 20px;
}
.download_nav {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #a6a6a6;
}
.download_nav ul li {
    float: left;
    line-height: 50px;
    padding: 0 20px;
    font-size: 18px;
}
.download_nav ul li a {
    color: #fff;
}
.download_nav ul li a:hover {
    color: #c81623;
}
.download_file{
    display: none;
}
.download_file ul li {
    width: 100%;
    height: 70px;
    border-radius: 15px;
    margin: 20px 0;
    font-size: 24px;
    line-height: 70px;
    background-color: #ccc;
}
.download_file ul li:hover {
    border: 2px solid #ff6700;
}
.filename {
    padding-left: 15px;
    color: #000;
}
.download_btn a {
    padding: 0 15px;
    color: rgba(42, 130, 228, 98%);
}
.download_information {
    position: relative;
    /* display: none; */
}
.text {
    width: 700px;
    height: 400px;
    margin: 30px 20px;
}
.text p {
    font-size: 18px;
    text-align: justify;
    color: #fff;
}
.picture {
    position: absolute;
    overflow: hidden;
    left: 750px;
    top: 30px;
    width: 450px;
    height: 300px;
    border-radius: 15px;
}
.picture img {
    width: 450px;
    height: 300px;
}
</style>