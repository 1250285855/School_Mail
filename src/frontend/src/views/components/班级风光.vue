<script setup>

</script>

<template>
    <div class="main">
        <div class="Box1">
            <div class="Text">
                <div class="title">
                    <p>计算机科学与技术专业实践</p>
                </div>
                <div class="Doc">

                </div>
            </div>
            <div class="Photo"></div>
        </div>
        <div class="Box2">

        </div>
    </div>
</template>

<style scoped>
.main .Box1 {
    height: 600px;
    background-color: rgba(20, 42, 49);
    display: flex;
    justify-content: space-around;
}
.main .Box1 .Text {
    height: 600px;
    width: 650px;
    background-color: antiquewhite;
}
.main .Box1 .Text .title {
    float: left;
    width: 650px;
}
.main .Box1 .Text p {
    text-align: center;
    font-size: 28px;
    margin-top: 40px;
    color: white;
}
.main .Box1 .Text .Doc {

}
.main .Box1 .Photo {
    height: 500px;
    width: 650px;
    margin-top: 50px;
    border-radius: 15px;
    background-color: aliceblue;
}
.main .Box2 {
    height: 600px;
    background-color: aliceblue;
}
</style>