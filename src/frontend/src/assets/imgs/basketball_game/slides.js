import {ref} from 'vue'
import { getImgUrl } from '@/assets/js'

// build
export const slides = ref([
    {
        id: 1,
        image: getImgUrl('basketball_game/bg0.jpeg'),
    },
    {
        id: 2,
        image: getImgUrl('basketball_game/bg1.jpeg'),
    },
    {
        id: 3,
        image: getImgUrl('basketball_game/bg2.jpeg'),
    },
    {
        id: 4,
        image: getImgUrl('basketball_game/bg3.jpeg'),
    },
    {
        id: 5,
        image: getImgUrl('basketball_game/bg4.jpeg'),
    },
    {
        id: 6,
        image: getImgUrl('basketball_game/bg5.jpeg'),
    },
    {
        id: 7,
        image: getImgUrl('basketball_game/bg6.jpeg'),
    },
    {
        id: 8,
        image: getImgUrl('basketball_game/bg7.jpeg'),
    },
    {
        id: 9,
        image: getImgUrl('basketball_game/bg8.jpeg'),
    },
    {
        id: 10,
        image: getImgUrl('basketball_game/bg9.jpeg'),
    }
])