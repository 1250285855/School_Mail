<script setup>

</script>

<template>
    <div class="main">
        <div class="Box1">
            <div class="Text">
                <div class="title">
                    <p>计算机科学与技术专业实践</p>
                </div>
                <div class="title_English">
                    <p>Professional Practice of Computer Science and Technology</p>
                </div>
                <div class="Doc">
                    <p>
                        在余根平老师的带领下,21级计科的同学们前往网龙网络公司进行了为期一周的专业实践活动。同学们在网龙公司体验了各式各样的VR设备,感受到了新时代的高科技设备带来的冲击力。同时网龙网络公司的高管们也亲自下场为国际学院的学生们进行授课，其中包括人力资源总监的职业生涯规划课，技术总监帮助同学们深入了解计算机行业现状及未来的课程，还有锻炼大家团队协作能力的异域文化体验课程。
                    </p>
                    <p>
                        一周下来干货满满的课程让同学们受益匪浅，最后一天各个小组的成果汇报也是精彩纷呈，大家通过不同的演绎方式表达出了一周的学习之后自己的收获，相信通过这一次的专业实践，计科班级的同学们对自己接下来的大学生涯乃至未来的职业发展都有了更加清晰的定位和认知。
                    </p>
                </div>
            </div>
            <div class="Photo"></div>
        </div>
        <div class="Box2">
            <div class="Photo2"></div>
            <div class="Text2">
                <div class="title2">
                    <p>计科专业学生接受国防教育</p>
                </div>
                <div class="title2_English">
                    <p>Students majoring in engineering receive national defense education</p>
                </div>
                <div class="Doc2">
                    <p>在2021年的12月份国际数字经济学院的学生们迎来了军训。计科专业的同学们被分为了走队列和军体拳两个方阵,在教官的严格教导下，通过十天的训练同学们组成的队列从一开始的歪七扭八变成了训练有素、整齐划一，而军体拳科目的同学打起拳来也是虎虎生风，颇有一番“国家兴亡，匹夫有责”的威猛气势。</p>
                    <p>最后，在汇报展示上同学们也顺利地展示了各自科目的训练成果，这也寓意着这次的军训锻炼大家勇于面对挫折，挑战困难的目的顺利达成。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main .Box1 {
    height: 700px;
    background-color: rgba(20, 42, 49);
    display: flex;
    justify-content: space-around;
}
.main .Box1 .Text {
    height: 600px;
    width: 650px;
    /* background-color: antiquewhite; */
}
.main .Box1 .Text .title {
    float: left;
    width: 650px;
    margin-top: 80px;
}
.main .Box1 .Text .title p {
    text-align: center;
    font-size: 28px;
    margin-top: 40px;
    color: white;
}
.main .Box1 .Text .title_English {
    width: 650px;
    float: left;
}
.main .Box1 .Text .title_English p {
    text-align: center;
    font-size: 20px;
    margin-top: 15px;
    color: rgba(235, 235, 235, 0.64);
}
.main .Box1 .Text .Doc {
    width: 630px;
    /* height: 100px; */
    margin-top: 10px;
    margin-left: 10px;
    /* background-color: pink; */
    float: left;
}
.main .Box1 .Text .Doc p {
    text-align: justify;
    text-indent: 2em;
    font-size: 18px;
    margin-top: 30px;
    color: rgb(138, 202, 218);;
}
.main .Box1 .Photo {
    height: 500px;
    width: 650px;
    margin-top: 76px;
    border-radius: 15px;
    /* background-color: aliceblue; */
    background-image: url(@img/专业实践.jpg);
    background-size: 650px 500px;
    background-position: center;
    background-repeat: no-repeat;

    /* border-style: solid; */
    display: block;
    -webkit-transition:width 2s, height 2s, -webkit-transform 2s;
    transition:width 2s, height 2s, transform 2s;
}
.main .Box1 .Photo:hover {
    width: 750px;
    height: 600px;
    background-size: 750px 600px;
    -webkit-transform:rotate(360deg);
    transform:rotate(360deg);
}
.main .Box2 {
    height: 700px;
    background-color: #F5FFFA;
    display: flex;
    justify-content: space-around;
}
.main .Box2 .Photo2 {
    height: 500px;
    width: 650px;
    margin-top: 76px;
    border-radius: 15px;
    /* background-color: aliceblue; */
    background-image: url(@img/军训.jpg);
    background-size: 650px 500px;
    background-position: center;
    background-repeat: no-repeat;

    /* border-style: solid; */
    display: block;
    -webkit-transition:width 2s, height 2s,-webkit-transform 2s;
    transition:width 2s, height 2s, transform 2s;
}
.main .Box2 .Photo2:hover {
    width: 750px;
    height: 600px;
    background-size: 750px 600px;
    -webkit-transform:rotate(360deg);
    transform:rotate(360deg);
}
.main .Box2 .Text2 {
    height: 600px;
    width: 650px;
}
.main .Box2 .Text2 .title2 {
    float: left;
    width: 650px;
    margin-top: 120px;
}
.main .Box2 .Text2 .title2 p {
    text-align: center;
    font-size: 28px;
    margin-top: 40px;
    color: 	#BDB76B;
}
.main .Box2 .Text2 .title2_English {
    width: 650px;
    float: left;
}
.main .Box2 .Text2 .title2_English p {
    text-align: center;
    font-size: 20px;
    margin-top: 15px;
    color:  #F0E68C;
}
.main .Box2 .Text2 .Doc2 {
    width: 630px;
    margin-top: 10px;
    margin-left: 10px;    
    float: left;
}
.main .Box2 .Text2 .Doc2 p {
    text-align: justify;
    text-indent: 2em;
    font-size: 18px;
    margin-top: 30px;
    color: #808000;
}
</style>