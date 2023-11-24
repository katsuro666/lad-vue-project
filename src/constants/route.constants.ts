export enum RouteNames {
  HOME = 'Home',
  AUTH = 'Auth',
  ABOUT = 'About',
  LOGIN = 'Log in',
  SIGNUP = 'Sign up',
  POSTS = 'Posts',
}

export enum RoutePaths {
  HOME = '/',
  AUTH = '/auth',
  ABOUT = '/about',
  LOGIN = '/login',
  SIGNUP = '/signup',
  POSTS = '/posts',
  NOTFOUND = '/:catchAll(.*)*'
}
