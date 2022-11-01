<script setup>

import { ref } from 'vue'
import { is_login } from '@/api/api.js'
import router from '@/router/index.js'

import Header from './components/header/Header.vue';
import News from './components/News.vue';
import Welcome from './components/Welcome.vue';
import PhotoWall from './components/PhotoWall.vue';
import Footer from './components/Footer.vue';
import Header_skip from './components/header/Header_skip.vue';
import Header_simple_1 from './components/header/Header_simple_1.vue';

const isLogin = ref(false)

// 判断是否已经登录了
async function profile() {
  const value = await is_login();
  if (value['status'] == true) {
    isLogin.value = true
    return true;
  } 
  // 没登录的话跳转到登录页面
  else {
    // router.push('/login');
  }
}
profile()
</script>

<template>

  <div id="app">
    
    <!-- <Header id="header" :isLogin=isLogin></Header> -->
    <!-- <Header_skip id="header" :isLogin=isLogin></Header_skip> -->
    <Header_simple_1></Header_simple_1>
    <Transition name="fade">
      <News></News>
    </Transition>
    <PhotoWall></PhotoWall>
    <Welcome></Welcome>
    <Footer></Footer>
    
  </div>

</template>

<!-- style 加上scoped标签，只会影响当前组件的css -->
<style scoped>

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 1200px;
  max-width: 1905px;
  min-height: 800px;
  background-color: black;
}

</style>