import { createRouter, createWebHistory } from 'vue-router'
import IconView from '@/views/IconView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'icon',
      component: IconView,
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('@/views/ButtonView.vue'),
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import('@/views/DialogView.vue'),
    },
    {
      path: '/collapse',
      name: 'collapse',
      component: () => import('@/views/CollapseView.vue'),
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: () => import('@/views/DropdownView.vue'),
    },
    {
      path: '/pager',
      name: 'pager',
      component: () => import('@/views/PagerView.vue'),
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: () => import('@/views/TooltipView.vue'),
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('@/views/CardView.vue'),
    },
  ],
  linkActiveClass: 'active',
})

export default router
