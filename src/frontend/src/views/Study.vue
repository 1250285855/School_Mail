<script setup>

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

  $(".download_nav_btn1").click(function() {
    $(".download_file").fadeOut("slow");
    $(".download_file").css("display", "none");
    $(".download_information").fadeIn("slow");
  })

  $(".download_nav_btn2").click(function() {
    $(".download_information").fadeOut("slow");
    $(".download_information").css("display", "none");
    $(".download_file").fadeIn("slow");
  })
})

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
                    <li>
                        <a href="javascript:;">
                            <img src="@img/c++语言.png" alt="">
                            <h4>C/C++编程原理</h4>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="@img/数学.png" alt="">
                            <h4>高等数学</h4>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="@img/线性代数.png" alt="">
                            <h4>线性代数</h4>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="@img/数据结构.png" alt="">
                            <h4>数据结构</h4>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="@img/网络系统.png" alt="">
                            <h4>数字系统</h4>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="@img/计算机写作.png" alt="">
                            <h4>计算机科学写作</h4>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="@img/电路.png" alt="">
                            <h4>电路与电子</h4>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="@img/离散.png" alt="">
                            <h4>离散结构</h4>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Clanguage -->
        <div class="clanguage">
            <div class="window">
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
            <!-- main -->
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
                            <li><a href="javascript:;" class="download_nav_btn1">课程简介</a></li>
                            <li><a href="javascript:;" class="download_nav_btn2">课程文件</a></li>
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
                    <div class="download_information">
                        <div class="text fl">
                            <p>
                                C语言是一门面向过程的计算机编程语言，与C++、C#、Java等面向对象编程语言有所不同。C语言的设计目标是提供一种能以简易的方式编译、处理低级存储器、仅产生少量的机器码以及不需要任何运行环境支持便能运行的编程语言。C语言描述问题比汇编语言迅速、工作量小、可读性好、易于调试、修改和移植，而代码质量与汇编语言相当。C语言一般只比汇编语言代码生成的目标程序效率低10%-20%。因此，C语言可以编写系统软件。当前阶段，在编程领域中，C语言的运用非常之多，它兼顾了高级语言和汇编语言的优点，相较于其它编程语言具有较大优势。计算机系统设计以及应用程序编写是C语言应用的两大领域。同时，C语言的普适较强，在许多计算机操作系统中都能够得到适用，且效率显著。C语言拥有经过了漫长发展历史的完整的理论体系，在编程语言中具有举足轻重的地位。
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
.course ul li a {
    position: relative;
    display: block;
    width: 360px;
    height: 204px;
    border-radius: 15px;
    background-color: #ccc;
}
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
    background-image: url("@img/编程.png");
    background-size: 1600px 743px;
    background-position: center;
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