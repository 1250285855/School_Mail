<script setup>  
import { ref } from 'vue'

import { delete_request }from '@/api/api.js';

const formTitle = ref('删除账户')
const message = ref('')

const username = ref('')
const password = ref('')
const checkPassword = ref('')
const superCode = ref('')

async function deleteAccount () {  

    if (username.value == '' || password.value == '' || checkPassword.value == '' || superCode.value == '') {
        message.value = '请填写完整信息'
        return
    }

    var data = {
        username: username.value,
        password: password.value,
        superCode: superCode.value
    }

    var value = await delete_request(data)

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
            <div id="superCode">
                <label for="superCode">超级密码</label>
                <input v-model="superCode" type="password" placeholder="超级密码" />
            </div>
            <input v-on:click="deleteAccount" type="button" value="删除账户" />
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