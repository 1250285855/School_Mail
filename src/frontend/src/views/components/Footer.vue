<script setup>

</script>

<template>
    <div class="_all">
        <div class="_US">
            <div class="_US_Logo"></div>
            <div class="_US_Doc">
                <div class="_link">
                    <a href="#">闽江学院</a> |
                    <a href="#">闽江学院国际数字经济学院</a> |
                    <!-- <a href="#">校函</a> | -->
                    <!-- <a href="#">国际学院计算机科学与技术</a> | -->
                    <a href="#">隐私政策</a> |
                    <a href="#">用户协议</a> |
                    <a href="#">问题反馈</a> |
                </div>
            </div>
            <div class="_my">
                违法和不良信息举报电话:137-7450-2836
                <br><a href="#">知识产权侵权投诉</a>
                <br>本网站所有数据、资料,除特殊说明,均出自于我院专业实验室                     
            </div>
        </div>
    </div>
</template>

<style scoped>
._all ._US {
    width: 100%;
    background-color: rgb(0, 0, 0, 0.3);
    /* position: fixed; */
    display: flex;
    justify-content: space-around;
    bottom: 0;
    margin-top: -75px;
}
._all ._US ._US_Logo {
    width: 150px;
    height: 75px;
    /* margin-left: 250px; */
    /* background-color: #fff; */
    background-image: url(@img/IDEC_CE_Logo_With_Name.png);
    background-size: 150px 75px;
    background-repeat: no-repeat;
    float: left;
}
._all ._US ._US_Doc {
    /* width: 700px; */
    /* background-color: #fff; */
    display: flex;

}
._all ._US ._US_Doc ._link {
    /* width: 700px; */
    height: 75px;
    color: #fcfcfc;
    display: flex;
    justify-content: center;
    align-items: center;
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
._all ._US ._my {
    /* width: 700px; */
    height: 75px;
    /* background-color: pink; */
    font-size: 13px;
    color: #fcfcfc;
    float:right;
    align-items: center;
}
._all ._US ._my a {
    font-size: 13px;
    color: #fcfcfc;
    text-decoration: none;
}
._all ._US ._my a:hover {
    color: rgb(255, 255, 255, 0.7);
}
</style>