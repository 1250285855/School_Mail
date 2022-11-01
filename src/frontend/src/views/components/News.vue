<script setup>

import { ref } from 'vue'
import { getImgUrl } from '@/assets/js'

import {Splide, SplideSlide, SplideTrack} from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

const options = ref({
    rewind: true,
    autoplay: true,
})

</script>

<template>
<div id="main">

    <Splide id="splide" :has-track="false" :options="options">
        <div class="custom-wrapper">
        <SplideTrack>
            <SplideSlide class="slide">
                <div class="slide_body" id="slide_1">
                    <h1></h1>
                    <h2></h2>
                    <div id="button">
                        
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide class="slide">
                <img src="../../assets/imgs/longBg/bg1.jpg" alt="">
            </SplideSlide>
            <SplideSlide class="slide">
                <img src="../../assets/imgs/longBg/bg2.jpg" alt="">
            </SplideSlide>
        </SplideTrack>
        <div class="splide__arrows"></div>
    </div>
    </Splide>

</div>
</template>

<style scoped>

#main {
    display: flex;
    justify-content: center;
    align-items: center;
}

#splide {
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.7);
}

.slide {
    display: flex;
    justify-content: center;
}

.slide img {
    width: 100%;
    height: 600px;
    object-fit: cover;
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

.slide_body {
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.slide_body #button {
    border-radius: 2px;
    border: 1px solid #fff;
}

#slide_1 {
    background-image: url('@img/longBg/bg0.jpg');
}

#slide_2 {
    background-image: url('@img/longBg/bg1.jpg');
}

#slide_3 {
    background-image: url('@img/longBg/bg2.jpg');
}

</style>