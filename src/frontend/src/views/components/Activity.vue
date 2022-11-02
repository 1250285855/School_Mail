

<template>
    <div id = "activity">

    <h3>当前点赞数量为：{{count}}</h3>
    <button @click="addCount">点赞</button>
    </div>


    
</template>

<script setup>
import {ref} from 'vue'
        
    const count = ref(0)
    function addCount(){
        count.value += 1
        console.log(count)
        console.log(count.value)
    }
    </script>