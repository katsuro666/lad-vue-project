<template>
  <div class="nav-bar">
    <ul class="nav__list" v-for="(matched, idx) in $route.matched" :key="idx">
      <li class="nav__item">
        <router-link :to="matched.path">{{ matched.name }}</router-link>
      </li>
      <span v-if="idx != Object.keys($route.matched).length - 1"> / </span>
    </ul>
    <!-- <ul class="nav__list" v-for="(path) in pathArr" :key="path">
      <li class="nav__item" @click="() => pathArr.value.pop()">
        <router-link :to="RoutePaths.HOME + path">{{ path }}</router-link>
      </li> 
    </ul>-->
    <!-- <span v-if="idx != Object.keys($route.matched).length - 1"> / </span> -->
  </div>
</template>

<script setup lang="ts">
// import { RoutePaths } from '@/constants/route.constants';
// import { ref } from 'vue';
// import { useRoute } from 'vue-router';

// const route = useRoute()
// const pathArr = ref([])

// route.fullPath.split('/').forEach((path) => {
//   if (path) {
//     pathArr.value.push(path)
//   }
// })

// console.log(route.fullPath)
// console.log(pathArr)
</script>

<style src="./NavBar.style.scss" scoped></style>
