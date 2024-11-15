import { ref } from 'vue'
import Clanguage from './clanguage.vue'
import Math from './math.vue'
import Algebra from './algebra.vue'
import Datastructure from './datastructure.vue'
import System from './system.vue'
import Working from './working.vue'
import Circuit from './circuit.vue'
import Dispersed from './dispersed.vue'
import Linux from './linux.vue'

export const studyPageComponentsList = ref([
    {
        id: 0,
        name: 'C/C++编程语言',
        classId: 'CYP.CSE120M.S2022',
        teacher: '汪涛',
        //vite动态引入外部图片要在路径前加上/src
        backgroundImage: '/src/assets/imgs/学习资源/编程语言.png',
        components: Clanguage,
    },
    {
        id: 1,
        name: '高等数学',
        classId: 'CYP.MAT200M.F2022',
        teacher: '伍慧玲',
        backgroundImage: '/src/assets/imgs/学习资源/高等数学.png',
        components: Math,
    },
    {
        id: 2,
        name: '线性代数',
        classId: 'CYP.MAT160M.S2022',
        teacher: '范林元',
        backgroundImage: '/src/assets/imgs/学习资源/线性代数.png',
        components: Algebra
    },
    {
        id: 3,
        name: '数据结构',
        classId: 'CYP.CSE200M.F2022',
        teacher: '蔡远征',
        backgroundImage: '/src/assets/imgs/学习资源/数据结构.png',
        components: Datastructure
    },
    {
        id: 4,
        name: '数字系统',
        classId: 'CYP.ECE200M.F2022',
        teacher: 'Anastasia Ioannou',
        backgroundImage: '/src/assets/imgs/学习资源/数字系统.png',
        components: System
    },
    {
        id: 5,
        name: '计算机科学与技术写作',
        classId: 'CYP.CSE215M.F2022',
        teacher: 'Anastasia Ioannou',
        backgroundImage: '/src/assets/imgs/学习资源/计算机写作.png',
        components: Working
    },
    {
        id: 6,
        name: '电路与电子',
        classId: 'CYP.ECE205M.F2022',
        teacher: 'Antonios Antoniou',
        backgroundImage: '/src/assets/imgs/学习资源/电路与电子.png',
        components: Circuit
    },
    {
        id: 7,
        name: '离散结构',
        classId: 'CYP.MAT170M.S2022',
        teacher: 'Anastasia Ioannou',
        backgroundImage: '/src/assets/imgs/学习资源/离散数学.png',
        components: Dispersed
    },
    {
        id: 8,
        name: 'Linux系统与应用',
        classId: 'CYP.CSE210M.S2022',
        teacher: 'Linzidaren',
        backgroundImage: '/src/assets/imgs/学习资源/linux.png',
        components: Linux
    }
])

// { "__name": "clanguage", "__hmrId": "2199cf39", "__scopeId": "data-v-2199cf39", "__file": "C:/Users/admin/Desktop/School_Mail/src/frontend/src/views/components/studycomponents/clanguage.vue" }
// { "__name": "clanguage", "__hmrId": "2199cf39", "__scopeId": "data-v-2199cf39", "__file": "C:/Users/admin/Desktop/School_Mail/src/frontend/src/views/components/studycomponents/clanguage.vue" }