import { ref } from 'vue'

// imgUrl:必须得是imgs/下的图片路径
export function getImgUrl(imgUrl) {

    return new URL('../imgs/${imgUrl}', import.meta.url).href
}