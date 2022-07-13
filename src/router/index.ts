import { createRouter, createWebHashHistory } from 'vue-router'
import  Layout  from '../views/layout/layout.vue'
export default createRouter({
  history: createWebHashHistory() , 
  routes:[
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '', // 二级路由的 path为空 表示默认要装入的组件
          name: 'home',
          component: () => import('../views/home/home.vue')
        },
        {
          path: '/question',
          name: 'question',
          component: () => import('../views/question/question.vue')
        },
        {
          path: '/video',
          name: 'video',
          component: () => import('../views/video/video.vue')
        },
        {
          path: '/setting',
          name: 'setting',
          component: () => import('../views/setting/setting.vue')
        }
      ]
    },
  ]
})