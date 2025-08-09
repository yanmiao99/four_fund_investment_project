import {  createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  { path: '/',
    redirect: '/fundList'
  },
  { path: '/fundList', component: () => import('@/views/FundList/index.vue')},
  { path: '/fundDetail', component: () => import('@/views/FundDetail/index.vue')},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router