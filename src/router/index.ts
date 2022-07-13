import { createRouter, createWebHashHistory } from 'vue-router'
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
      component: () => import('../views/layout/layout.vue')
    },
  ]
})