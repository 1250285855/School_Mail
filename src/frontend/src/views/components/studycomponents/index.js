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
        name: "C/C++编程语言",
        classId: "CYP.CSE120M.S2022",
        teacher: "汪涛",
        classIntroduction: "C语言是一门面向过程的计算机编程语言，与C++、C#、Java等面向对象编程语言有所不同。C语言的设计目标是提供一种能以简易的方式编译、处理低级存储器、仅产生少量的机器码以及不需要任何运行环境支持便能运行的编程语言。C语言描述问题比汇编语言迅速、工作量小、可读性好、易于调试、修改和移植，而代码质量与汇编语言相当。C语言一般只比汇编语言代码生成的目标程序效率低10%-20%。因此，C语言可以编写系统软件。当前阶段，在编程领域中，C语言的运用非常之多，它兼顾了高级语言和汇编语言的优点，相较于其它编程语言具有较大优势。计算机系统设计以及应用程序编写是C语言应用的两大领域。同时，C语言的普适较强，在许多计算机操作系统中都能够得到适用，且效率显著。C语言拥有经过了漫长发展历史的完整的理论体系，在编程语言中具有举足轻重的地位。",
        backgroundImage: "@img/c++语言.png",
        IntroductionImage: "@img/c语言课程简介.png",
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