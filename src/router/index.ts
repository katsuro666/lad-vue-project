import { createRouter, createWebHistory, type RouteLocationNormalizedLoaded } from 'vue-router'
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
        layout: MainLayout,
        title: 'Home',
        breadcrumb: () => [
          {
            title: 'Home'
          }
        ]
      }
    },

    {
      path: RoutePaths.ABOUT,
      component: () => import('@/views/AboutView/AboutView.vue'),
      meta: {
        layout: MainLayout,
        title: 'About',
        breadcrumb: () => [
          {
            title: 'About'
          }
        ]
      }
    },

    {
      path: RoutePaths.POSTS,
      name: RouteNames.POSTS,
      component: () => import('@/views/PostsView/PostsView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Posts',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Home',
            link: RoutePaths.HOME
          },
          {
            title: route.meta.title
          }
        ]
      }
    },

    {
      path: `${RoutePaths.POSTS}/:id`,
      name: RouteNames.POST,
      component: () => import('@/views/PostView/PostView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Post',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Home',
            link: RoutePaths.HOME
          },
          {
            title: 'Posts',
            link: RoutePaths.POSTS
          },
          {
            title: route.params.id as string
          }
        ]
      }
    },

    {
      path: RoutePaths.USERS,
      name: RouteNames.USERS,
      component: () => import('@/views/UsersView/UsersView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Users',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Home ',
            link: RoutePaths.HOME
          },
          {
            title: route.meta.title
          }
        ]
      }
    },

    {
      path: `${RoutePaths.USERS}/:id`,
      name: RouteNames.USER,
      component: () => import('@/views/UserView/UserView.vue'),
      meta: {
        layout: MainLayout,
        title: 'User',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Home',
            link: RoutePaths.HOME
          },
          {
            title: 'Users',
            link: RoutePaths.USERS
          },
          {
            title: route.params.id as string
          }
        ]
      }
    },

    {
      path: RoutePaths.LOGIN,
      component: () => import('@/views/AuthView/LogInView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Log In',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Home',
            link: RoutePaths.HOME
          },
          {
            title: route.meta.title
          }
        ]
      }
    },

    {
      path: RoutePaths.SIGNUP,
      component: () => import('@/views/AuthView/SignUpView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Sign Up',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Home',
            link: RoutePaths.HOME
          },
          {
            title: route.meta.title
          }
        ]
      }
    },

    {
      path: RoutePaths.NOTFOUND,
      component: () => import('@/views/PageNotFound/PageNotFound.vue'),
      meta: {
        layout: MainLayout,
        title: 'Not Found',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Home',
            link: RoutePaths.HOME
          },
          {
            title: route.meta.title
          }
        ]
      }
    }
  ]
})

export default router
