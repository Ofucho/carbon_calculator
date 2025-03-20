import { createRouter, createWebHistory } from 'vue-router'
import IntroductionView from '@/views/IntroductionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IntroductionView
    },
    {
      path: '/carbon-calculator',
      name: 'carbon-calculator',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/CalculatorView.vue'),
    },
  ],
})

export default router
