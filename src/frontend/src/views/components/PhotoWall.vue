<script setup>

import { ref } from 'vue'
import { slides } from '@img/basketball_game/slides.js'


import {Splide, SplideSlide, SplideTrack} from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

const options = ref({
    rewind: true,
    autoplay: true,
})

</script>

<template>

<div>
    <div id="main">
        <div id="text"> 
            <div id="title">篮球赛</div>
            <div id="second_title">团日活动和外教一起打篮球</div>
        </div>
        <div id="photo_wall">
            <Splide :options="options" :has-track="false">
                <SplideTrack>
                    <SplideSlide v-for="slide in slides" :key="slide.id">
                        <img :src="slide.image">
                    </SplideSlide>
                </SplideTrack>
                <div class="splide__arrows"></div>
                <div class="splide__pagination"></div>
            </Splide>
        </div>
    </div>
</div>

</template>

<style scoped>

#main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
}

#text {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#title {
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 20px;
    color:rgb(87, 185, 153)
}

#second_title {
    font-size: 25px;
    margin-bottom: 20px;
}

#photo_wall {
    width: 800px;
    height: 200px;
}

.splide__arrows {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
}

.splide__pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    top: 42%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: 100%;
}

#photo_wall img{
    height: 600px;
    width: 100%;
    object-fit: contain;
}

</style>