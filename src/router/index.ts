import { createRouter, createWebHistory } from 'vue-router'
import { RouteNames, RoutePaths } from '@/constants/route.constants'
import MainLayout from '@/layouts/MainLayout/MainLayout.vue'
import HomeView from '@/views/HomeView/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutePaths.HOME,
      name: RouteNames.HOME,
      component: HomeView,
      meta: {
        layout: MainLayout
      }
    },
    {
      path: RoutePaths.AUTH,
      name: RouteNames.AUTH,
      component: () => import('@/views/AuthView/AuthView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: RoutePaths.NOTFOUND,
      name: RouteNames.NOTFOUND,
      component: () => import('@/views/PageNotFound/PageNotFound.vue'),
      meta: {
        layout: MainLayout
      }
    }
  ]
})

export default router
