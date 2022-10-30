<script setup></script>

<template>
<div id="main">
<div class="_all">
        <div class="_title">
            <div class="_title1">
                <div class="_logo"></div>
                <div class="_navigation">
                    <a href="#">专业概况</a>
                    <a href="#">关于我们</a>
                    <a href="#">班级荣誉</a>
                    <a href="#">团日活动</a>
                    <a href="#">学生风采</a>
                    <a href="#">社区互动</a>
                    <a href="#">共创营地</a>
                </div>
                <div class="_logo_landing"></div>
                <div class="_landing">
                    <a href="#">欢迎登录</a>
                </div>
            </div>
        </div>
        <div class="_Computer"></div>
        <div class="_GetIn">
            <a href="#">Computer Engineering</a>
        </div>
        <div class="_GetIn1">
            <a href="#">Around The World</a>
        </div>
        <div class="_Auto">
            <div class="_Know">
                <a href="#">了解更多</a>
            </div>
            <div class="_Community">
                <a href="#">进入社区</a>
            </div>
        </div>
        <div class="_US">
            <div class="_US_Logo"></div>
            <div class="_US_Doc">
                <div class="_link">
                    <a href="#">闽江学院</a> |
                    <a href="#">闽江学院国际数字经济学院</a> |
                    <a href="#">校函</a> |
                    <a href="#">国际学院计算机科学与技术</a> |
                    <a href="#">国际学院计科官网隐私政策</a> |
                    <a href="#">国际学院计科官网用户协议</a> |
                    <a href="#">问题反馈</a> |
                </div>
                <div class="_my">
                    违法和不良信息举报电话:137-7450-2836 |
                    <a href="#">知识产权侵权投诉</a> |
                    本网站所有数据、资料,除特殊说明,均出自于我院专业实验室                     
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>

* {
    margin: 0;
    padding: 0;
}
#main {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 100%;
    width: 100%;
    /* min-width: 1200px; */
    background-image: url('@img/IT2.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    /* -webkit-background-size: cover;
    -o-background-size: cover;
    z-index: -1000;
    zoom: 1; */
    background-position: center top;
}
._all {
    width: 100%;
    height: 822px;
    /* background-color: pink; */
}
._all ._title {
    width: 100%;
    height: 67.35px;
    /* border-top:5px solid black; */
    /* border-bottom: 3px solid #edeef0; */
    background-color: rgb(0, 0, 0, 0.3);
}
._all ._title ._title1 {
    width: 1300px;
    height: 67.35px;
    /* background-color: aqua; */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    /* float: left; */
} 
._all ._title ._title1 ._logo {
    width: 60px;
    height: 67.35px;
    margin-right: 80px;
    line-height: 67.35px;
    color: #fcfcfc;
    /* background-color: blue; */
    background-image: url(@img/IDEC_CE_Logo.png);
    background-size: 67px 67px;
    background-position: center;
    background-repeat: no-repeat;
    float: left;
}
._all ._title ._title1 ._navigation {
    width: 900px;
    height: 67.35px;
    line-height: 67.35px;
    margin-right: 70px;
    /* background-color: pink; */
    float: left;
}
._all ._title ._title1 ._navigation a {
    font-size: 18px;
    height: 67.35px;
    padding: 0 20px;
    color: #fcfcfc;
    text-decoration: none;
    display: inline-block;
}
._all ._title ._title1 ._navigation a:hover {
    background-color: #eee;
    color: black;
}
._all ._title ._title1 ._logo_landing {
    width: 68.28px;
    height: 67.35px;
    background-image: url(@icons/Login1.png);
    background-size: 36px 36px;
    background-position: center;
    background-repeat: no-repeat;
    float: left;
}
._all ._title ._title1 ._landing {
    width: 120px;
    height: 67.35px;
    line-height: 67.35px;
    float: right;
}
._all ._title ._title1 ._landing a {
    font-size: 18px;
    height: 67.35px;
    padding: 0 20px;
    color: #fcfcfc;
    /* background-color: blue; */
    text-decoration: none;
    display: inline-block;
}
._all ._title ._title1 ._landing a:hover {
    background-color: #eee;
    color: black;
}
._all ._Computer {
    width: 100px;
    height: 100px;
    margin-top: 100px;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    background-image: url(@img/computer.png);
    background-size: 70px 70px;
    background-repeat: no-repeat;
    background-position: center;
    /* background-color: green; */
}
._all ._Computer img {
    max-width: 70px;
    max-height: 70px;
}
._all ._GetIn {
    width: 600px;
    height: 80px;
    font-size: 45px;
    line-height: 80px;
    margin: 0 auto;
    text-align: center;
    /* background-color: green; */
}
._all ._GetIn a {
    color: black;
    text-decoration: none;
}
._all ._GetIn1 {
    width: 600px;
    height: 80px;
    font-size: 45px;
    line-height: 80px;
    margin: 0 auto;
    text-align: center;
    /* background-color: green; */
}
._all ._GetIn1 a {
    color: black;
    text-decoration: none;
}
._all ._Auto {
    width: 450px;
    height: 40px;
    margin-top: 50px;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    /* background-color: green; */
}
._all ._Auto ._Know {
    width: 225px;
    height: 40px;
    line-height: 40px;
    border-radius: 36px 0 0 36px;
    background-color: rgb(0, 0, 0, 0.7);
    text-align: center;
    float: left;
}
._all ._Auto ._Know:hover {
    background-color: rgb(255, 255, 255, 0.7);
}
._all ._Auto ._Know a {
    font-size: 20px;
    text-decoration: none;
    color: #fcfcfc;
}
._all ._Auto ._Know a:hover {
    color: black;
}
._all ._Auto ._Community {
    width: 225px;
    height: 40px;
    line-height: 40px;
    border-radius: 0 36px 36px 0;
    background-color: rgb(128, 128, 128, 0.7);
    text-align: center;
    float: right;
}
._all ._Auto ._Community:hover {
    background-color: rgb(0, 0, 0, 0.7);
}
._all ._Auto ._Community a {
    font-size: 20px;
    text-decoration: none;
    color: black
}
._all ._Auto ._Community a:hover{
    color: #fcfcfc;
}
._all ._US {
    width: 100%;
    height: 150px;
    background-color: rgb(0, 0, 0, 0.3);
    position: fixed;
    bottom: 0;
}
._all ._US ._US_Logo {
    width: 150px;
    height: 75px;
    margin-left: 250px;
    /* background-color: #fff; */
    background-image: url(@img/IDEC_CE_Logo_With_Name.png);
    background-size: 150px 75px;
    background-repeat: no-repeat;
    float: left;
}
._all ._US ._US_Doc {
    width: 700px;
    height: 150px;
    /* background-color: #fff; */
    float: left;
}
._all ._US ._US_Doc ._link {
    width: 700px;
    height: 75px;
    color: #fcfcfc;
    /* line-height: 50px; */
    /* background-color: green; */
}
._all ._US ._US_Doc ._link a {
    font-size: 13px;
    color: #fcfcfc;
    text-decoration: none;
}
._all ._US ._US_Doc ._link a:hover {
    color: rgb(255, 255, 255, 0.7);
}
._all ._US ._US_Doc ._my {
    width: 700px;
    height: 75px;
    /* background-color: pink; */
    font-size: 13px;
    color: #fcfcfc;
}
._all ._US ._US_Doc ._my a {
    font-size: 13px;
    color: #fcfcfc;
    text-decoration: none;
}
._all ._US ._US_Doc ._my a:hover {
    color: rgb(255, 255, 255, 0.7);
}

</style>