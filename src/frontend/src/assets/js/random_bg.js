import { ref } from 'vue'

// require 是webpack的语法，vite不支持
// const bg1 = require('@img/bg/bg1.jpg')

const bg1 = new URL('@img/bg/bg1.jpg', import.meta.url)
const bg2 = new URL('@img/bg/bg2.jpg', import.meta.url)
const bg3 = new URL('@img/bg/bg3.jpg', import.meta.url)
const bg4 = new URL('@img/bg/bg4.jpg', import.meta.url)
const bg5 = new URL('@img/bg/bg5.jpg', import.meta.url)

const bgList = [bg1, bg2, bg3, bg4, bg5]

export function randomBg() {
    const bg = ref(bgList[Math.floor(Math.random() * bgList.length)])
    return { bg }
}