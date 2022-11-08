/*

componentsList说明：
homePageComponentsList是用来存放需要展示在home page页面中的所有组件。

*/

// import.meta.globEager('@/views/components/*.vue')

import { ref } from 'vue'

import News from './news.vue'
import PhotoWall from './photoWall.vue'
import Welcome from './welcome.vue'

import Introduction from './Introduction.vue'
import ClassView from './ClassView.vue'
import Teachers from './Teachers.vue'

import AboutUs from '@/views/components/AboutUs.vue'

import Introduction1 from './专业导读.vue'
import Introduction2 from './专业优势.vue'

export const homePageComponentsList = ref([
  {
    id: 0,
    name: "主页",
    components: {
      News,
      PhotoWall,
      Welcome,
    }
  },
  {
    id: 1,
    name: "专业概况",
    components: {
      Introduction1,
      Introduction2,
      Introduction,
    }
  },
  {
    id: 2,
    name: "关于我们",
    components: {
      AboutUs,
    }
  },
  {
    id: 3,
    name: "班级荣誉",
    components: {
    }
  },
  {
    id: 4,
    name: "学生风采",
    components: {
    }
  },
  {
    id: 5,
    name: "社区互动",
    components: {
    }
  },
  {
    id:6,
    name: "共创营地",
    components: {
    }
  }
])