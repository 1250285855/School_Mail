<script setup>

import { ref } from 'vue'
import { getImgUrl } from '@/assets/js'
import $ from 'jquery';

import Header_study from '@/views/components/header/Header_study.vue';
import Footer from '@/views/components/footer.vue'

import { onMounted } from 'vue'

onMounted(() => {
  $(".titlefirst, .titlesecond, .course").fadeIn("slow");

  $(".course ul li").click(function() {
    $(".main").fadeOut("slow");
    $(".main").css("display", "none");
    $(".clanguage").fadeIn("slow");
  })

  $(".title_btn").click(function() {
    $(".clanguage").fadeOut("slow");
    $(".clanguage").css("display", "none");
    $(".main").fadeIn("slow");
  })

  $(".shutdown").click(function() {
    $(".clanguage").fadeOut("slow");
    $(".clanguage").css("display", "none");
    $(".main").fadeIn("slow");
  })
})

const class_name = ref([
    {
        id: 0,
        name: "C/C++编程原理",
        img: getImgUrl("c++语言.png"), 
    },
    {
        id: 1,
        name: "高等数学",
        img: getImgUrl("/数学.png"),
    },
    {
        id: 2,
        name: "线性代数",
        img: getImgUrl("/线性代数.png"),
    },
    {
        id: 3,
        name: "数据结构",
        img: getImgUrl("/数据结构.png"),
    },
    {
        id: 4,
        name: "数字系统",
        img: getImgUrl("/网络系统.png"),
    },
    {
        id: 5,
        name: "计算机科学写作",
        img: getImgUrl("/计算机写作.png"),
    },
    {
        id: 6,
        name: "电路与电子",
        img: getImgUrl("/电路.png"),
    },
    {
        id: 7,
        name: "离散结构",
        img: getImgUrl("/离散.png"),
    },
])

</script>

<template>
    <!-- <div id="main"> -->
    
   <div class="all">
        <!-- Header -->
        <Header_study></Header_study>
        <!-- Main -->
        <div class="main">
            <!-- Title -->
            <div class="title">
                <!-- TitleFirst -->
                <h1 class="titlefirst">欢迎开启计算机学习之旅</h1>
                <!-- TitleSecond -->
                <h1 class="titlesecond">请选择想要学习的科目</h1>
            </div>
            <!-- Course -->
            <div class="course">
                <ul>
                    <li v-for="item in class_name" :key="item.id">
                        <a href="javascript:;">
                            <img :src="item.img" alt="">
                            <h4>{{item.name}}</h4>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Clanguage -->
        <div class="clanguage">
            <!-- header -->
            <div class="clanguage_header">
                <!-- logo -->
                <a href="javascript:;" class="fl title_btn">
                    <div class="clogo fl">
                        <img src="@img/c++语言.png" alt="">
                    </div>
                    <div class="ctitle fl">
                        <h4>C/C++编程语言</h4>
                        <h5>CYP.CSE120M.S2022</h5>
                    </div>
                </a>
                <a href="javascript:;" class="fr">
                    <div class="shutdown">
                        <img src="@img/叉叉.png" alt="">
                    </div>
                </a>
            </div>
            <!-- Main -->
            <div class="cmain">
                <!-- Teacher -->
                <div class="teacher fl">
                    <div class="information">
                        <img src="@img/个人信息.png" alt="" class="fl">
                        <h3>汪涛</h3>
                    </div>
                </div>
                <!-- Download -->
                <div class="download">
                    <div class="download_nav">
                        <ul>
                            <li><a href="javascript:;">课程简介</a></li>
                            <li><a href="javascript:;">课程文件</a></li>
                        </ul>
                    </div>
                    <div class="download_file">
                        <ul>
                            <li>
                                <div class="filename fl">
                                    文件名称
                                </div>
                                <div class="download_btn fr">
                                    <a href="javascript:;">下载</a>
                                    <a href="javascript:;">详情</a>
                                </div>
                            </li>
                            <li>
                                <div class="filename fl">
                                    文件名称
                                </div>
                                <div class="download_btn fr">
                                    <a href="javascript:;">下载</a>
                                    <a href="javascript:;">详情</a>
                                </div>
                            </li>
                            <li>
                                <div class="filename fl">
                                    文件名称
                                </div>
                                <div class="download_btn fr">
                                    <a href="javascript:;">下载</a>
                                    <a href="javascript:;">详情</a>
                                </div>
                            </li>
                            <li>
                                <div class="filename fl">
                                    文件名称
                                </div>
                                <div class="download_btn fr">
                                    <a href="javascript:;">下载</a>
                                    <a href="javascript:;">详情</a>
                                </div>
                            </li>
                            <li>
                                <div class="filename fl">
                                    文件名称
                                </div>
                                <div class="download_btn fr">
                                    <a href="javascript:;">下载</a>
                                    <a href="javascript:;">详情</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <Footer></Footer>
    </div>
    
<!-- </div> -->
</template>

<style scoped>
#main {
    display: flex;
    flex-direction: column;
    width: 100%;
}
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
    display: flex;
    flex-direction: column;
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
    margin-top: 10px;
    /* line-height: 50px; */
    font-size: 18px;
    padding: 0 15px;
}
.nav ul li input {
    padding: 0 10px;
    height: 20px;
    width: 180px;
    border-radius: 10px;
    border: 1px solid #000;
}
.login {
    margin-right: 10px;
}
.login a h4 {
    font-size: 16px;
}
.login a img {
    margin-top: 10px;
    width: 30px;
    height: 30px;
}
.main {
    /* display: none; */
    margin: 50px auto;
    width: 1600px;
    height: 734px;
}
.title {
    width: 100%;
    height: 173px;
}
.titlefirst {
    display: none;
    text-align: center;
    font-size: 60px;
    color: #000;
}

.titlesecond {
    display: none;
    text-align: center;
    font-size: 48px;
    color: #000;
}
.course {
    display: none;
    margin-top: 30px;
    width: 100%;
}
.course ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.course ul li {
    margin-top: 0;
    margin-left: 10px;
    margin-right: 30px;
    margin-bottom: 30px;
    transition: all .5s;
}
.course ul li:hover {
    transform: translate(10px, -10px);
}
/* .course ul li:active {
    transform: scale(2, 2);
} */
.course ul li a {
    position: relative;
    display: block;
    width: 360px;
    height: 204px;
    border-radius: 15px;
    background-color: #ccc;
}
/* .course ul li a:checked {
    transform: scale(2, 2);
} */
.course ul li a img {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
}
.course ul li a h4 {
    text-align: center;
    line-height: 204px;
    padding-top: 45px;
    font-size: 18px;
    color: #000;
}
.clanguage {
    display: none;
    margin: 50px auto;
    width: 1600px;
    height: 734px;
    border-radius: 15px;
    background-color: #ccc;
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
    color: #000;
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
.download_file ul li {
    width: 100%;
    height: 70px;
    border-radius: 15px;
    margin: 20px 0;
    font-size: 24px;
    line-height: 70px;
    background-color: #fff;
}
.download_file ul li:hover {
    border: 2px solid rgba(42, 130, 228, 98%);
}
.filename {
    padding-left: 15px;
    color: #000;
}
.download_btn a {
    padding: 0 15px;
    color: rgba(42, 130, 228, 98%);
}
.none {
    display: none;
}
</style>