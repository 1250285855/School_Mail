<script setup>

import { ref } from 'vue'
import { is_login, logout_request } from '@/api/api.js'
import router from '@/router'

const props = defineProps({
    isLogin: {
        type: Boolean,
        default: false,
    }
})

const username = ref('')
const emit = defineEmits('cd_page')
const isOpen = ref(0)

function login() {
    router.push('/login')
}

function register() {
    router.push('/register')
}

function logout() {
    
    logout_request()

    router.push('/')
    router.go(0)

}

function openLabel(labelId) {
    isOpen.value = labelId
    emit('cd_page', labelId)
}

// 判断是否已经登录了
async function profile() {
  const value = await is_login();
  if (value['status'] == true) {
    console.log(value['data'])
    username.value = value['data']
    return value['data']
  } 
  // 没登录的话跳转到登录页面
  else {
    // router.push('/login');
  }
}
profile()
</script>

<template>
    <div></div>
        <div id="main_Logo">
            <div id="main_Logo_img" @click="openLabel(0)"></div>
            <div id="main_Logo_doc">
                <div class="chinese"> 计 算 机 科 学 与 技 术</div>
                <div class="english">Computer Science and Technology of MinJiang University</div>
            </div>
            <div id="main_login">
                <div v-if="isLogin" id="profile">您好，{{username}}</div>
                <div v-if="isLogin" id="logout" @click="logout">退出登录</div>
                <div v-if="!isLogin" id="login" @click="login">登录</div>
                <!-- <div v-if="!isLogin" id="register" @click="register">注册</div> -->
            </div>
        </div>
        <div class="main_Navigation">
            <div class="main_Navigation1">
                <div class="Navigation_Logo">
                    <div class="Navigation">
                        <a @click="openLabel(1)" :class="{labelHover: isOpen==1}">专业概况</a>
                        <a @click="openLabel(2)" :class="{labelHover: isOpen==2}">关于我们</a>
                        <a @click="openLabel(3)" :class="{labelHover: isOpen==3}">班级荣誉</a>
                        <a @click="openLabel(4)" :class="{labelHover: isOpen==4}">团日活动</a>
                        <a @click="openLabel(5)" :class="{labelHover: isOpen==5}">学生风采</a>
                        <a @click="openLabel(6)" :class="{labelHover: isOpen==6}">社区互动</a>
                        <a @click="openLabel(7)" :class="{labelHover: isOpen==7}">共创营地</a>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>
 * {
    margin: 0;
    padding: 0;
}
#main_Logo {
    width: 100%;
    height: 150px;
    background-color: rgba(20, 42, 49);
    position: relative;
    /* 父盒子：让子盒子垂直居中显示 */
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}
#main_Logo_img {
    width: 600px;
    height: 120px;
    /* background-color: green; */
    /* margin-top: 15px; */
    /* margin-bottom: auto; */
    /* position: absolute; */
    /* top: 50%; */
    /* margin-top: -60px;
    margin-left: 100px; */
    /* 让盒子垂直居中显示 */
    /* margin-right: 0; */
    background-image: url(@img/IDEC_CE_Logo_With_Name.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 240px 120px;
    right: 50px;
    /* float: left; */
    cursor: pointer;
}
#main_Logo_doc {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: green; */
    /* position: absolute; */
    /* top: 50%;
    margin-top: -60px;
    margin-left: 350px; */
    /* float: left; */
}

#main_login {
    width: 400px;
    height: 40px;
    display: flex;
    margin-left:200px;
}

#main_login #profile {
    font-size: 25px;
    color: rgb(200, 200, 200);
    right:100px
}

#main_login #logout {
    width: 120px;
    height: 40px;
    border: 1px solid rgb(120, 120, 120);
    text-align: center;
    line-height: 40px;
    border-radius: 50px;
    font-size: 20px;
    color: rgb(160, 160, 160);
    cursor: pointer;
}

#main_login #logout:hover {
    background-color: rgb(200, 200, 200);
    color: #000;
}

#main_login #login{
    width: 100px;
    height: 40px;
    border: 1px solid rgb(200, 200, 200);
    text-align: center;
    line-height: 40px;
    border-radius: 50px;
    font-size: 20px;
    color: #fff;
    left:20px;
    cursor: pointer;
}

#main_login #login:hover {
    background-color: rgb(200, 200, 200);
    color: #000;
}

#main_login #register {
    width: 80px;
    height: 40px;
    border: 1px solid rgb(200, 200, 200);
    background-color: rgb(200, 200, 200);
    text-align: center;
    line-height: 40px;
    border-radius: 50px;
    font-size: 20px;
    color: #000;
    left:20px;
    margin-left: 20px;
    cursor: pointer;
}

#main_login #register:hover {
    background-color: rgba(20, 42, 49);
    color: #fcfcfc;
}

.chinese {
    width: 600px;
    height: 80px;
    /* background-color: pink; */
    font-size: 38px;
    font-weight: 200;
    line-height: 80px;
    text-align: center;
    color: rgb(243,243,243);
}
.english {
    width: 600px;
    height: 40px;
    /* background-color: #fff; */
    font-size: 20px;
    color: #fdeac9;
    text-align: center;
    line-height: 10px;
}
.main_Navigation {
    width: 100%;
    height: 67.35px;
    border-top: 3px solid #cbebf4;
    border-bottom: 2px solid #fdeac9;
    background-color:rgb(138, 202, 218);
}
.main_Navigation .main_Navigation1 {
    width: 1300px;
    height: 67.35px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
.main_Navigation .main_Navigation1 .Navigation {
    width: 1300px;
    height: 67.35px;
    line-height: 67.35px;
    margin: 0 auto;
    /* background-color: green; */
    text-align: center;
    /* float: left; */
}
.main_Navigation .main_Navigation1 .Navigation a {
    font-size: 18px;
    height: 67.35px;
    padding: 0 40px;
    /* color: #fcfcfc; */
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
}
.main_Navigation .main_Navigation1 .Navigation a:hover {
    background-color: #eee;
    color: black;
}
.labelHover {
    background-color: #eee;
    color: black;
}
</style>