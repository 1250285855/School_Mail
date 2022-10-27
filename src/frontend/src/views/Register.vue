<script setup>  
import { ref } from 'vue'

import { login_request, register_request }from '@/api/api.js';

const formTitle = ref('注册信息')
const message = ref('')

const username = ref('')
const password = ref('')
const checkPassword = ref('')
const email    = ref('')

async function register () {  

    if (username.value == '' || password.value == '' || checkPassword.value == '' || email.value == '') {
        message.value = '请填写完整信息'
        return
    }
    else if (password.value != checkPassword.value) {
        message.value = '两次密码不一致'
        return
    }

    var data = {
        username: username.value,
        password: password.value,
        email: email.value
    }

    var value = await register_request(data)

    message.value = value['data']

}

</script>

<template>
    <div id="main">
        <div id="title">
            {{formTitle}}
        </div>
        <form>
            <div id="username">
                <label for="username">用户名</label>
                <input v-model="username" type="text" placeholder="用户名" />
            </div>
            <div id="password">
                <label for="password">密码</label>
                <input v-model="password" type="password" placeholder="密码" />
            </div>
            <div id="checkPassword">
                <label for="checkPassword">确认密码</label>
                <input v-model="checkPassword" type="password" placeholder="确认密码" />
            </div>
            <div id="email">
                <label for="email">邮箱</label>
                <input v-model="email" type="email" placeholder="邮箱" />
            </div>
            <input v-on:click="register" type="button" value="注册" />
            {{message}}
        </form>
    </div>
</template>

<style scoped>

#main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 400px;
    width: 300px;
    background-color: rgb(140, 140, 140);
}

#title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    height: 50px;
    width: 100%;
    background-color: rgb(113, 113, 113);
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;
    background-color: rgb(113, 113, 113);
}
</style>