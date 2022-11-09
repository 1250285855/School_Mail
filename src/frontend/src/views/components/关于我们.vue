<script setup>

</script>

<template>
    <div class="main">
        <div class="Box1">
            <strong>
                <p id="Title">团队成员</p>
            </strong>
            <p id="Text">来自21级计算机科学与技术专业的 Savo Shen, Ethan(雷锘)以及 Shark(奇杭)组成的小团队。</p>
        </div>
        <div class="Box">
            <strong>
                <p id="Title">创立初衷</p>
            </strong>
            <p id="Text">为部分有想法、有自主学习能力的同学建立的一个团队合作小项目，以规范的项目开发模式，让大家一起努力学习，创立了这个网站。</p>
        </div>
        <div class="Box">
            <strong>
                <p id="Title">创作理念</p>
            </strong>
            <ul id="Text1">
                <li>用最新的网站开发技术,vue + Django 前后端分离开发。</li>
                <li>学习使用git代码管理,完成团队协作。</li>
            </ul>
        </div>
        <div class="Box">
            <strong>
                <p id="Title">团队目标</p>
            </strong>
            <ul id="Text1">
                <li>为计科专业的同学们打造一个可以交流学习、生活以及各个方面问题的平台。</li>
                <li>完成网站框架制作。</li>
                <li>制作"学习二十大"主题活动页面。</li>
            </ul>
        </div>
        <div class="Box2">
            <strong>
                <p id="Title">加入我们</p>
            </strong>
            <p id="Text">诚邀各位有热情，对编程有兴趣的小伙伴们加入我们的项目。为我们的网站添砖加瓦，贡献属于自己的力量！</p>
        </div>
    </div>
</template>

<style scoped>
.main {
    height: 500px;
    background-color: rgba(20, 42, 49);
    display: flex;
    justify-content: space-between;
}
.main .Box {
    width: 200px;
    height: 300px;
    margin-top: 100px;
    background-color: aliceblue;
    border: 2px solid rgb(138, 202, 218);
    /* box-shadow: 10px black; */
}
.main .Box1 {
    width: 200px;
    height: 300px;
    margin-top: 100px;
    margin-left: 15px;
    background-color: aliceblue;
    border: 2px solid rgb(138, 202, 218);
}
.main .Box2 {
    width: 200px;
    height: 300px;
    margin-top: 100px;
    margin-right: 15px;
    background-color: aliceblue;
    border: 2px solid rgb(138, 202, 218);
}
#Title {
    /* color: #fdeac9; */
    color: rgb(138, 202, 218);
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
}
#Text {
    color: rgb(192, 192, 192);
    margin: 10px 15px;
    text-align: justify;
}
#Text1 {
    color: rgb(192, 192, 192);
    margin-top: 10px;
    margin-right: 10px;
    text-align: justify;
}
</style>         