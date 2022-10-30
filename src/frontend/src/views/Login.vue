<script setup>

import { ref, onMounted } from 'vue'
import { login_request } from '@/api/api.js'

const title = ref('登录')
const message = ref('')
const username = ref('')
const password = ref('')

const main = ref(null)
const Login_background = ref('@img/Login_background.jpg')

// 生命周期
onMounted(() => {
//   main.value.style.backgroundImage = 'url(${Login_background.value})'
})

async function login() {

    if (username.value == '') {
        message.value = '请填写用户名'
        return
    }
    if (password.value == '') {
        message.value = '请填写密码'
        return
    }

    var data = {
        username: username.value,
        password: password.value,
    }

    var value = await login_request(data)

    message.value = value['data']


}

</script>

<template>

    <div id="main" ref="main" style="background-image: url(../assets/imgs/Login_background.jpg)">
        <div id="body">
            <div id="title">
                {{title}}
            </div>
            <div id="form">
                <form>
                    <div id="username">
                        <label for="username">用户名</label>
                        <input v-model="username" placeholder="用户名" />
                    </div>
                    <div id="password">
                        <label for="password">密码</label>
                        <input v-model="password" placeholder="密码" />
                    </div>
                    <div id="submit">
                        <input v-on:click="login" type="button" value="登录" />
                    </div>
                    <label id="message">{{message}}</label>
                </form>
            </div>
        </div>
    </div>

</template>

<style scoped>

#main {
    display: flex;
    justify-content: center;
    align-items: center;
    place-items: center;
    height: 100%;
    width: 100%;
    min-height: 800px;
    min-width: 1200px;
    /* background-image: url(../assets/imgs/Login_background.jpg) */
    /* background-image: url("@img/Login_background.jpg") */
}

</style>