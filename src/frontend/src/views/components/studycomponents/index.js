import { ref } from 'vue'
import Clanguage from './clanguage.vue'
import Math from './math.vue'
import Algebra from './algebra.vue'
import Datastructure from './datastructure.vue'
import System from './system.vue'
import Working from './working.vue'
import Circuit from './circuit.vue'
import Dispersed from './dispersed.vue'
import Base from './base.vue'

export const studyPageComponentsList = ref([
    {
        id: 0,
        name: "C/C++编程语言",
        classId: "CYP.CSE120M.S2022",
        teacher: "汪涛",
        classIntroduction: "C语言是一门面向过程的计算机编程语言，与C++、C#、Java等面向对象编程语言有所不同。C语言的设计目标是提供一种能以简易的方式编译、处理低级存储器、仅产生少量的机器码以及不需要任何运行环境支持便能运行的编程语言。C语言描述问题比汇编语言迅速、工作量小、可读性好、易于调试、修改和移植，而代码质量与汇编语言相当。C语言一般只比汇编语言代码生成的目标程序效率低10%-20%。因此，C语言可以编写系统软件。当前阶段，在编程领域中，C语言的运用非常之多，它兼顾了高级语言和汇编语言的优点，相较于其它编程语言具有较大优势。计算机系统设计以及应用程序编写是C语言应用的两大领域。同时，C语言的普适较强，在许多计算机操作系统中都能够得到适用，且效率显著。C语言拥有经过了漫长发展历史的完整的理论体系，在编程语言中具有举足轻重的地位。",
        backgroundImage: "@img/c++语言.png",
        IntroductionImage: "@img/c语言课程简介.png",
        components: Base,
    },
    {
        id: 1,
        name: "高等数学",
        classId: "CYP.MAT200M.F2022",
        teacher: "伍慧玲",
        classIntroduction: "高等数学以微积分理论为核心内容，以函数为基本研究对象，以极限作为贯穿微积分理论始终的基本思想，通过解决求切线斜率和求瞬时速度等来自不同学科的问题引入导数这一研究函数的基本工具，再从求曲边梯形面积和求变速运动路程等不同问题的处理中抽象出了积分。以牛顿-莱布尼兹公式为桥梁，微分与积分这对矛盾得到了高度的统一。在空间解析几何和向量代数的基础上，将对多元函数建立微积分理论。此外，级数理论和常微分方程理论也将在本课程中呈现。通过本课程的学习，要使学生获得：函数、极限、连续,一元函数微积分学,向量代数和空间解析几何，多元函数微积分学，无穷级数（包括傅里叶级数），常微分方程等方面的基本概念、基本理论和基本运算技能，为学习后继课程和进一步获得数学知识奠定必要的数学基础。",
        IntroductionImage: "@img/数学.png",
        IntroductionImage: "@img/c语言课程简介.png",
        components: Base,
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