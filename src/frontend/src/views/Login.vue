<script setup>

import { ref, onMounted, onActivated } from 'vue'
import { login_request } from '@/api/api.js'
import { getRandomBg } from '@js/random_bg.js'

import router from '@/router'

const title = ref('登录')
const message = ref('')
const username = ref('')
const password = ref('')

const main = ref(null)
const Login_background = getRandomBg()

// 生命周期
onMounted(() => {
  main.value.style.backgroundImage = "url(" + Login_background + ")"
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

    if (value['status'] == true) {
        router.push('/')
    }

    message.value = value['data']

}

function register() {
    router.push('/register')
}

</script>

<template>

    <div id="main" ref="main">
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
                        <input v-model="password" type="password" placeholder="密码" />
                    </div>
                    <div id="submit">
                        <input @click="login" type="button" value="登录" />
                        <input @click="register" type="button" value="注册" />
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
    background-size: cover;
}

</style>