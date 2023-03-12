<script setup>
import { ref } from 'vue';
</script>

<template>
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