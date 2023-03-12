import { ref } from "vue";
import clanguageFile from './clanguageFile.vue';
import clanguageMessage from './clanguageMessage.vue';

export const clanguageDownload = ref([
    {
        id: 0,
        name: 'C语言课程简介',
        components: clanguageMessage
    },
    {
        id: 1,
        name: 'C语言课程文件',
        components: clanguageFile
    }
])