<script setup>

import Header from './views/Header.vue';
import News from './views/News.vue';
import Body from './views/Body.vue';
import Footer from './views/Footer.vue';

</script>

<template>

  <div id="app">
    
    <Header id="header"></Header>
    <News id="news"></News>
    <Body id="body"></Body>
    <Footer id="footer"></Footer>
  </div>

</template>

<!-- style 加上scoped标签，只会影响当前组件的css -->
<style scoped>

#app {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  height: 100%;
  width: 100%;
}

#header {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: rgb(200, 200, 200);
}

</style>