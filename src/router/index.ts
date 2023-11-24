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
      path: RoutePaths.ABOUT,
      component: () => import('@/views/AboutView/AboutView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: RoutePaths.POSTS,
      name: RouteNames.POSTS,
      component: () => import('@/views/PostsView/PostsView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: RoutePaths.POSTS + '/:id',
      name: 'Post',
      component: () => import('@/views/PostView/PostView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: RoutePaths.AUTH + RoutePaths.LOGIN,
      component: () => import('@/views/AuthView/LogInView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: RoutePaths.AUTH + RoutePaths.SIGNUP,
      component: () => import('@/views/AuthView/SignUpView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: RoutePaths.NOTFOUND,
      component: () => import('@/views/PageNotFound/PageNotFound.vue'),
      meta: {
        layout: MainLayout
      }
    }
  ]
})

export default router
