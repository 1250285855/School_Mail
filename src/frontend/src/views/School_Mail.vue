<script setup>

import { ref } from 'vue'
import { isLogin } from '@/api/api.js'
import router from '@/router/index.js'

import Header from './components/Header.vue';
import News from './components/News.vue';
import Welcome from './components/Welcome.vue';
import Footer from './components/Footer.vue';
import Activity from './components/Activity.vue';
const is_login = ref(false)

// 判断是否已经登录了
async function profile() {
  const value = await isLogin();
  if (value['status'] == true) {
    is_login.value = true
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
    
    <!-- <Header id="header" :isLogin=is_login></Header>
    <News id="news"></News>
    <Welcome id="welcome"></Welcome>
    <Footer id="footer"></Footer> -->
    <Activity ></Activity>
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
  min-height: 800px;
  background-color: black;
}

#header {
  margin-bottom: -80px;
  z-index: 100;
}

#news {
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#welcome {
  min-height: 600px;
  width: 100%;
  min-width: 1200px;
  background-image: url(@img/IT2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

</style>