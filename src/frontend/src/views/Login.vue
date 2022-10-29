<script setup>

import { ref } from 'vue'

const title = ref('登录')
const username = ref('')
const password = ref('')

const Login_background = ref('@img/Login_background.jpg')

</script>

<template>

    <div id="main" :style="{backgroundImage: Login_background}">
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
                        <input v-on:click="submit" type="button" value="登录" />
                    </div>
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
}

</style>