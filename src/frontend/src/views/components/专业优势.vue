<script setup>

</script>

<template>

<div></div>
<div id="main">
    <div id="title">
        <h1>专业优势</h1>
        <h2>在国际数字经济学院的支持下有许多优势</h2>
    </div>
    <div id="content">
        <div class="card" id="card1">
            <h1>国际化培养方案</h1>
            <p>核心课程采用塞浦路斯欧洲大学的国际化培养方案,尤其注重加强学生在人工智能、嵌入式系统、信息安全与云计算等前沿学科领域的知识基础。课程具备极强的实战性,编程基础课采用手到学习(hands-on learning)教学法,高年级学生通过完成顶点项目(capstone project),累积用所学内容解决实际工程问题的能力。完成学业和考核要求后，可同时获得闽江学院计算机科学与技术专业和塞浦路斯欧洲大学计算机工程专业的学位证书。</p>
        </div>
        <div class="card" id="card2">
            <h1>国际化师资队伍</h1>
            <p>专业教学团队汇聚闽江学院与塞浦路斯欧洲大学在计算机科学领域的最优质师资，核心教学团队教师博士毕业于美国、英国、日本、澳大利亚等国际知名学府。中方专业教师团队主要来自“计算机科学与技术”省级一流本科专业建设点，科研工作依托福建省信息处理与智能控制重点实验室、数字福建智能化生产物联网实验室等省级科研平台开展，为本科生接触各类国家级、省级和企业横向科研项目，参与专业类和科创类竞赛提供技术支撑。</p>
        </div>
        <div class="card" id="card3">
            <h1>优越的实验室条件</h1>
            <p>国际数字经济学院的计算机专业实验课依托“闽江学院省级计算机实验教学示范中心”开展。实验室设备齐全，条件优越，为培养学生的实践能力提供了保障。学院还建有面向本科生开放的“学生科创中心”，为学生在课后参与各类学科竞赛和教师科研项目提供了场地和设备保障。</p>
        </div>
    </div>
</div>

</template>

<style scoped>

#main {
    min-height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(20, 42, 49);;
}

#title {
    margin-top: 80px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#title h1 {
    font-size: 40px;
    margin-bottom: 20px;
    color: white;
}

#title h2 {
    font-size: 20px;
    color: rgb(255, 255, 255, 0.5);
}

#content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1200px;
    height: 400px;
}

.card {
    height: 440px;
    width: 320px;
    background-color: white;
    border: 2px solid rgb(138, 202, 218);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card h1 {
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: rgb(138, 202, 218);
    margin-top: 40px;
}

.card p {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    margin-top: 20px;
    margin-left: 40px;
    margin-right: 40px;
    text-align: center;
    text-indent: justify;
    color: black;
}

</style>