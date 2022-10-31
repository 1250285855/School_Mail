<script setup>

</script>

<template>
        <div id="main_Logo">
            <div id="main_Logo_img"></div>
            <div id="main_Logo_doc">
                <div class="chinese"> 计 算 机 科 学 与 技 术 专 业</div>
                <div class="english">Computer Science and Technology of MinJiang University</div>
            </div>
        </div>
        <div class="main_Navigation">
            <div class="main_Navigation1">
                <div class="Navigation_Logo">
                    <div class="Navigation">
                        <a href="#">专业概况</a>
                        <a href="#">关于我们</a>
                        <a href="#">班级荣誉</a>
                        <a href="#">团日活动</a>
                        <a href="#">学生风采</a>
                        <a href="#">社区互动</a>
                        <a href="#">共创营地</a>
                        <a href="#">欢迎登录</a>
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
    #main_Logo {
    width: 100%;
    height: 150px;
    background-color: rgb(0, 0, 0, 0.7);
    position: relative;
    /* 父盒子：让子盒子垂直居中显示 */
}
#main_Logo_img {
    width: 240px;
    height: 120px;
    /* background-color: green; */
    /* margin-top: 15px; */
    /* margin-bottom: auto; */
    position: absolute;
    top: 50%;
    margin-top: -60px;
    margin-left: 100px;
    /* 让盒子垂直居中显示 */
    margin-right: 0;
    background-image: url(@img/IDEC_CE_Logo_With_Name.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 240px 120px;
    /* float: left; */
}
#main_Logo_doc {
    width: 600px;
    height: 120px;
    /* background-color: green; */
    position: absolute;
    top: 50%;
    margin-top: -60px;
    margin-left: 350px;
    /* float: left; */
}
.chinese {
    width: 600px;
    height: 80px;
    /* background-color: pink; */
    font-size: 38px;
    font-weight: 200;
    line-height: 80px;
    color: #fcfcfc;
}
.english {
    width: 600px;
    height: 40px;
    /* background-color: #fff; */
    font-size: 20px;
    color: #fcfcfc;
    line-height: 10px;
}
.main_Navigation {
    width: 100%;
    height: 67.35px;
    border-top: 3px solid #ff8500;
    border-bottom: 2px solid #edeef0;
    background-color: rgb(0, 0, 0, 0.7);
}
.main_Navigation .main_Navigation1 {
    width: 1300px;
    height: 67.35px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
.main_Navigation .main_Navigation1 .Navigation {
    width: 1300px;
    height: 67.35px;
    line-height: 67.35px;
    margin: 0 auto;
    /* background-color: green; */
    text-align: center;
    /* float: left; */
}
.main_Navigation .main_Navigation1 .Navigation a {
    font-size: 18px;
    height: 67.35px;
    padding: 0 40px;
    color: #fcfcfc;
    text-decoration: none;
    display: inline-block;
}
.main_Navigation .main_Navigation1 .Navigation a:hover {
    background-color: #eee;
    color: black;
}
</style>