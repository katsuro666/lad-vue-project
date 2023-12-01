<template>
  <div class="nav-bar">
    <div :key="index" v-for="(breadcrumb, index) in breadcrumbs" class="nav__item">
      <router-link v-if="breadcrumb.link" :to="{ path: breadcrumb.link, query: $route.query }">{{
        breadcrumb.title
      }}</router-link>
      <p v-else>{{ breadcrumb.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IBreadcrumb } from 'router'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbs = ref<IBreadcrumb[]>([])

if (typeof route.meta.breadcrumb === 'function') {
  breadcrumbs.value = route.meta.breadcrumb(route)
} else {
  breadcrumbs.value = route.meta.breadcrumb
}

watch(route, (newRoute) => {
  if (typeof newRoute.meta.breadcrumb === 'function') {
    breadcrumbs.value = newRoute.meta.breadcrumb(newRoute)
  } else {
    breadcrumbs.value = newRoute.meta.breadcrumb
  }
})
</script>

<style src="./NavBar.style.scss" lang="scss" scoped></style>
