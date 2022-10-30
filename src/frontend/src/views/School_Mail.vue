<script setup>

import { isLogin } from '@/api/api.js'
import router from '@/router/index.js'
import Header from './Header.vue';
import Body from './Body.vue';
import Footer from './Footer.vue';
import Header_tln from './Header_tln.vue';

// 判断是否已经登录了
async function profile() {
  const value = await isLogin();
  console.log(value)
  if (value['status'] == 'true') {
    return true;
  } 
  // 没登录的话跳转到登录页面
  else {
    // this.$router.push('/login');
    router.push('/login');
  }
}
profile()
</script>

<template>

  <div id="app">
    <Header id="header"></Header>
    <Body id="body"></Body>
    <!-- <Footer id="footer"></Footer> -->

  </div>

</template>

<!-- style 加上scoped标签，只会影响当前组件的css -->
<style scoped>

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
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

#login {
  display: flex;
  justify-content: center;
  align-items: center;
  place-items: center;
  height: 100%;
  width: 100%;
  min-height: 800px;
  min-width: 1200px;
}

</style>