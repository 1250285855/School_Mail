import { ref } from "vue";
import clanguageFile from './clanguageFile.vue';
import clanguageMessage from './clanguageMessage.vue';
import mathFile from './mathFile.vue';
import mathMessage from './mathMessage.vue';
import algebraFile from './algebraFile.vue';
import algebraMessage from './algebraMessage.vue';
import dtsFile from './dtsFile.vue';
import dtsMessage from './dtsMessage.vue';
import systemFile from './systemFile.vue';
import systemMessage from './systemMessage.vue';
import workingFile from './workingFile.vue';
import workingMessage from './workingMessage.vue';
import circuitFile from './circuitFile.vue';
import circuitMessage from './circuitMessage.vue';
import dspFile from './dspFile.vue';
import dspMessage from './dspMessage.vue';
import linuxMessage from './linuxMessage.vue'

//C语言
export const clanguageDownload = ref([
    {
        id: 0,
        name: 'C语言课程简介',
        classIntroduction: 'C语言是一门面向过程的计算机编程语言，与C++、C#、Java等面向对象编程语言有所不同。C语言的设计目标是提供一种能以简易的方式编译、处理低级存储器、仅产生少量的机器码以及不需要任何运行环境支持便能运行的编程语言。C语言描述问题比汇编语言迅速、工作量小、可读性好、易于调试、修改和移植，而代码质量与汇编语言相当。C语言一般只比汇编语言代码生成的目标程序效率低10%-20%。因此，C语言可以编写系统软件。当前阶段，在编程领域中，C语言的运用非常之多，它兼顾了高级语言和汇编语言的优点，相较于其它编程语言具有较大优势。计算机系统设计以及应用程序编写是C语言应用的两大领域。同时，C语言的普适较强，在许多计算机操作系统中都能够得到适用，且效率显著。C语言拥有经过了漫长发展历史的完整的理论体系，在编程语言中具有举足轻重的地位。',
        //vite动态引入外部图片要在路径前加上/src
        IntroductionImage: '/src/assets/imgs/c语言课程简介.png',
        components: clanguageMessage
    },
    {
        id: 1,
        name: 'C语言课程文件',
        components: clanguageFile
    }
])

//高等数学
export const  mathDownload = ref([
    {
        id: 0,
        name: '高等数学课程简介',
        classIntroduction: '高等数学以微积分理论为核心内容，以函数为基本研究对象，以极限作为贯穿微积分理论始终的基本思想，通过解决求切线斜率和求瞬时速度等来自不同学科的问题引入导数这一研究函数的基本工具，再从求曲边梯形面积和求变速运动路程等不同问题的处理中抽象出了积分。以牛顿-莱布尼兹公式为桥梁，微分与积分这对矛盾得到了高度的统一。在空间解析几何和向量代数的基础上，将对多元函数建立微积分理论。此外，级数理论和常微分方程理论也将在本课程中呈现。通过本课程的学习，要使学生获得：函数、极限、连续,一元函数微积分学,向量代数和空间解析几何，多元函数微积分学，无穷级数（包括傅里叶级数），常微分方程等方面的基本概念、基本理论和基本运算技能，为学习后继课程和进一步获得数学知识奠定必要的数学基础。',
        IntroductionImage: '/src/assets/imgs/c语言课程简介.png',
        components: mathMessage
    },
    {
        id: 1,
        name: '高等数学课程文件',
        components: mathFile
    }
])

//线性代数
export const algebraDownload = ref([
    {
        id: 0,
        name: '线性代数课程简介',
        classIntroduction: '线性代数是一门基础数学课程，它的基本概念、理论和方法，具有较强的逻辑性、抽象性和广泛的实用性。随着计算机及其应用技术的飞速发展，该课程的地位和作用也更为重要。因而，线性代数课程是我校理工科各专业和经济管理专业学生的一门重要的基础理论课，也是研究生入学考试数学科目的一部分。通过本课程的学习，能使学生比较系统地理解线性代数的基本概念和基本理论，掌握基本方法，对学生数学素养的提高也有着重要的作用，这些理论方法和能力能为学生学习后续课程及进一步扩大数学知识面奠定必要的数学基础。',
        IntroductionImage: '/src/assets/imgs/c语言课程简介.png',
        components: algebraMessage
    },
    {
        id: 1,
        name: '线性代数课程文件',
        components: algebraFile
    }
])

//数据结构
export const datastructureDownload = ref([
    {
        id: 0,
        name: '数据结构课程简介',
        classIntroduction: '数据结构是计算机科学教育中的一门必修课程。这门课程主要是介绍数据结构及其相关操作的算法. 本课程将使用C++程序设计语言和面向对象技术来实现各种数据结构。它的内容包括：算法分析、抽象数据类型、数组、表、栈、递归、广义表、队列和优先队列、树、搜索树和平衡搜索树、集合、散列和散列表、排序、图和图的算法。通过对本课程的学习，要求学生掌握数据结构的基本概念和知识，并可用任何计算机语言实现这些数据结构，为今后的软件开发工作打下扎实的基础。',
        IntroductionImage: '/src/assets/imgs/c语言课程简介.png',
        components: dtsMessage
    },
    {
        id: 1,
        name: '数据结构课程文件',
        components: dtsFile
    }
])

//数字系统
export const systemDownload = ref([
    {
        id: 0,
        name: '数字系统课程简介',
        classIntroduction: '数字系统课程目标是通过理论和实践学习可使学生掌握数字电路的基本概念、数制及编码、逻辑代数及逻辑函数，掌握组合逻辑电路的分析与设计方法，熟悉常用的中规模组合逻辑部件的功能及应用，掌握同步时序逻辑电路的分析、设计方法和典型的中、大规模时序逻辑部件；学会利用可编程逻辑器件分析、设计数字电路；学会正确使用常用的电子测量仪器，连接和测试电路，分析实验现象和排除故障，以及实施小型数字系统的综合实验。',
        IntroductionImage: '/src/assets/imgs/c语言课程简介.png',
        components: systemMessage
    },
    {
        id: 1,
        name: '数字系统课程文件',
        components: systemFile
    }
])

//计算机科学与技术写作
export const workingDownload = ref([
    {
        id: 0,
        name: '计算机科学与技术写作课程简介',
        classIntroduction: '',
        IntroductionImage: '/src/assets/imgs/c语言课程简介.png',
        components: workingMessage
    },
    {
        id: 1,
        name: '计算机科学与技术写作课程文件',
        components: workingFile
    }
])

//电路与电子
export const circuitDownload = ref([
    {
        id: 0,
        name: '电路与电子课程简介',
        classIntroduction: '电路与电子技术课程原理性较强，注重实验技能的培养。课程主要内容包括电路的基本概念、基本定律（定理）、基本理论；电路分析和计算的一般方法；电路的工作原理及电路的基本作用；变压器和电动机的基本原理和应用；安全用电的基本常识；放大电路、集成电路原理和逻辑分析电子及器件的外特性和应用技术。通过本课程学习使学生具有分析电路一般问题的能力和电路的基本操作技能；具有识读电子电路图、计算电路基本物理量的能力；具备应用电路理论解决生产、生活中的实际问题，及学习和应用电工电子新知识、新技术的能力。',
        IntroductionImage: '/src/assets/imgs/c语言课程简介.png',
        components: circuitMessage
    },
    {
        id: 1,
        name: '电路与电子课程文件',
        components: circuitFile
    }
])

//离散结构
export const dspDownload = ref([
    {
        id: 0,
        name: '离散结构课程简介',
        classIntroduction: '离散数学是培养学生抽象思维和严密概括能力的素质训练课程。因此离散数学是计算机科学和技术的重要理论基础之一，为计算机科学与技术学科各分支领域解决其基本问题提供了强有力的数学工具，具有十分广泛的应用。因此离散数学是计算机科学与技术学科各专业最重要的基础课程之一。计算机科学与技术学科各专业的学生学习离散数学，一方面为学习各专业课程作必要的数学准备，另一方面，培养和训练他们掌握使用数学语言或符号系统处理问题的基本方法，提高学生的逻辑推理能力、抽象思维能力和形式化思维能力。',
        IntroductionImage: '/src/assets/imgs/c语言课程简介.png',
        components: dspMessage
    },
    {
        id: 1,
        name: '离散结构课程文件',
        components: dspFile
    }
])

//linux
export const linuxDownload = ref([
    {
        id: 0,
        name: 'Linux系统与应用课程简介',
        classIntroduction: 'Linux® 是一个开源的操作系统（OS）。它由 Linus Torvalds 于 1991 年构思设计而成，最初这只是他的一项兴趣爱好。当时还在读大学的 Linus 想要基于 Unix 的原则和设计来创建一个免费的开源系统，从而代替 MINIX 操作系统。自此，这项兴趣爱好便逐步演变成了拥有最大用户群的操作系统。如今，它不仅是公共互联网服务器上最常用的操作系统，还是速度排名前 500 的超级电脑上使用的唯一一款操作系统。',
        //vite动态引入外部图片要在路径前加上/src
        IntroductionImage: '/src/assets/imgs/c语言课程简介.png',
        components: linuxMessage
    },
    {
        id: 1,
        name: 'Linux系统与应用课程文件',
        components: clanguageFile
    }
])