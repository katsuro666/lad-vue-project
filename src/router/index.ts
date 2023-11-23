import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import { RouteNames, RoutePaths } from '@/constants/route.constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutePaths.HOME,
      name: RouteNames.HOME,
      component: HomeView
    },
    {
      path: RoutePaths.AUTH,
      name: RoutePaths.AUTH,
      component: AuthView
    },
    {
      path: RoutePaths.NOTFOUND,
      name: RoutePaths.NOTFOUND,
      component: PageNotFound
    }
  ]
})

export default router
