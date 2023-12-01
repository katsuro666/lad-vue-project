export interface IBreadcrumb {
  title: string
  link?: string
}

declare module 'vue-router' {
  interface RouteMeta {
    layout?: unknown
    title: string
    breadcrumb: IBreadcrumb[] | ((route: RouteLocationNormalizedLoaded) => IBreadcrumb[])
  }
}
