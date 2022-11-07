<script setup>

import { ref } from 'vue'
import { is_login } from '@/api/api.js'
import { homePageComponentsList } from '@/views/components/index.js'

import router from '@/router/index.js'

import Header_skip from './components/header/Header_skip.vue';
import Header_simple_1 from './components/header/Header_simple_1.vue';
import Register from './Register.vue';
// import Login_Register from './Login_Register.vue'
import Introduction from './Professional Profile_Introduction.vue'
import Leader from './Professional Profile_Leader.vue';
import View from './Professional Profile_View.vue'
import Footer from '@/views/components/footer.vue'

const isOpen = ref(0)

</script>

<template>

  <div id="app">
    

    <View></View>
    <Header_skip @cd_page="(value) => isOpen = value"></Header_skip>

    <div v-for="components in homePageComponentsList">
      <div v-if="isOpen === components.id" v-for="component in components.components">
        <component :is="component"></component>
      </div>
    </div>
    
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