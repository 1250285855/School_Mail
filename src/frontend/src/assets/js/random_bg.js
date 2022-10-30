import { ref } from 'vue'

// require 是webpack的语法，vite不支持
// const bg1 = require('@img/bg/bg1.jpg')

const num = Math.floor(Math.random()*10%5)

const name = ref('bg'+num+'.jpg')

export function getRandomBg() {
    return new URL(`../imgs/bg/${name.value}`, import.meta.url).href
}