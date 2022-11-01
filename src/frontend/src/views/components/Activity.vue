

<template>
    <div id = "activity">
    <p>姓名：{{username}}</p>
    <p>性别：{{gender}}</p>
    <input type = "text" :placeholder="inputvalue">
    <h3>当前点赞数量为：{{count}}</h3>
    <button @click="addCount">点赞</button>
    </div>


    
</template>

<script setup>
import {ref} from 'vue'
        
    const username = ref('张三')
    const gender = ref('男')
    const inputvalue = ref('请输入内容')
    const count = ref(0)
    function addCount(){
        count.value += 1
        console.log(count)
        console.log(count.value)
    }
    </script>