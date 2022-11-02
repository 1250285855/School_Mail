<script setup>

</script>

<template>
<div></div>

<div id="main">

    <div id="logo">

    </div>

</div>

</template>

<style scoped>

#main {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-bottom: -120px; */
    z-index: 100;
    height: 80px;
    margin-bottom: -80px;
    background-color: transparent;
    /* 毛玻璃效果 */
    /* backdrop-filter: blur(6px); */
}

#logo {
    height: 80px;
    width: 200px;
    background-image: url('@icons/IDEC_CE/idec_ce0.png');
    background-size: cover;
}

</style>