<script setup>

import { ref } from 'vue'
import { isLogin } from '@/api/api.js'
import router from '@/router/index.js'
import Header from './Header.vue';
import Body from './Body.vue';
import Footer from './Footer.vue';
import Header_tln from './Header_tln.vue';

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
    
    <!-- <Header id="header"></Header> -->
    <!-- <Body id="body"></Body> -->
    <Header_tln id="header1" :isLogin=is_login></Header_tln>
    <Footer id="footer"></Footer>
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
}

#header1 {
    overflow: hidden;
    height: 2233.63px;
    height: 100%;
    width: 100%;
    min-width: 1200px;
    background-image: url('@img/IT2.jpg');
    background-color: red;
    background-repeat: no-repeat;
    background-size: 1480px 822px;
    background-position: center top;
}

#header {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: rgb(149, 149, 149);
}

#body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background-color: rgb(200, 200, 200);
}

</style>