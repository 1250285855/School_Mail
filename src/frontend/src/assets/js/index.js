import { ref } from 'vue'

// imgUrl:必须得是imgs/下的图片路径
export function getImgUrl(imgUrl) {
    const name = ref(imgUrl)
    return new URL(`../imgs/${name.value}`, import.meta.url).href
}