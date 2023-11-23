<template>
  <div class="nav-bar">
    <ul class="nav__list" v-for="(matched, idx) in $route.matched" :key="idx">
      <li class="nav__item">
        <a :href="matched.path">
          {{ matched.name }}
        </a>
      </li>
      <span v-if="idx != Object.keys($route.matched).length - 1"> / </span>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style src="./NavBar.style.scss" scoped></style>
