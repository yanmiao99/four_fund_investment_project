import {  createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  { path: '/',
    redirect: '/documentation'
  },
  { path: '/documentation', component: () => import('@/views/Documentation/index.vue'),meta:{title:'4%基金定投法'} },
  { path: '/fundList', component: () => import('@/views/FundList/index.vue'),meta:{title:'基金列表'} },
  { path: '/fundDetail', component: () => import('@/views/FundDetail/index.vue'),meta:{title:'基金详情'} },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 路由前置信息, 我需要路由变动的时候更改路由的名称
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


export default router