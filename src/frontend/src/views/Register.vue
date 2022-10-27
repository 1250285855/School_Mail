<script setup>

    // import login_request from '@/api/api.js';

    var formTitle = "用户注册";

</script>

<template>
    <div id="main">
        <div id="title">
            {{formTitle}}
        </div>
        <div id="form">
            <div id="username">
                <label for="username">用户名</label>
                <input type="text" id="username" name="username" placeholder="请输入用户名">
            </div>
            <div id="password">
                <label for="password">密码</label>
                <input type="password" id="password" name="password" placeholder="请输入密码">
            </div>
            <div id="check_password">
                <label for="check_password">确认密码</label>
                <input type="password" id="check_password" name="check_password" placeholder="请再次输入密码">
            </div>
            <div id="email">
                <label for="email">邮箱</label>
                <input type="email" id="email" name="email" placeholder="请输入邮箱">
            </div>
        </div>
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

#form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;
    background-color: rgb(113, 113, 113);
}
</style>