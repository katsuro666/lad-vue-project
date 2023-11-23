export enum RouteNames {
  HOME = 'home',
  AUTH = 'auth',
  NOTFOUND = 'notFound',
}

export enum RoutePaths {
  HOME = '/',
  AUTH = '/auth',
  NOTFOUND = '/:catchAll(.*)*',
}