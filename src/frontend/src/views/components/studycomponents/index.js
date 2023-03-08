import { ref } from 'vue'
import Clanguage from './clanguage.vue'
import Math from './math.vue'
import Algebra from './algebra.vue'
import Datastructure from './datastructure.vue'
import System from './system.vue'
import Working from './working.vue'
import Circuit from './circuit.vue'
import Dispersed from './dispersed.vue'

export const studyPageComponentsList = ref([
    {
        id: 0,
        name: "C语言",
        components: Clanguage
    },
    {
        id: 1,
        name: "高等数学",
        components: Math
    },
    {
        id: 2,
        name: '线性代数',
        components: Algebra
    },
    {
        id: 3,
        name: '数据结构',
        components: Datastructure
    },
    {
        id: 4,
        name: '数字系统',
        components: System
    },
    {
        id: 5,
        name: '计算机科学与技术写作',
        components: Working
    },
    {
        id: 6,
        name: '电路与电子',
        components: Circuit
    },
    {
        id: 7,
        name: '离散结构',
        components: Dispersed
    }
])

// { "__name": "clanguage", "__hmrId": "2199cf39", "__scopeId": "data-v-2199cf39", "__file": "C:/Users/admin/Desktop/School_Mail/src/frontend/src/views/components/studycomponents/clanguage.vue" }
// { "__name": "clanguage", "__hmrId": "2199cf39", "__scopeId": "data-v-2199cf39", "__file": "C:/Users/admin/Desktop/School_Mail/src/frontend/src/views/components/studycomponents/clanguage.vue" }