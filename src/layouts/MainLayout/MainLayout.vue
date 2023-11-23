<template>
  <div class="app-wrapper">
    <AppHeader />
    <NavBar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '@/components/AppFooter/AppFooter.vue'
import AppHeader from '@/components/AppHeader/AppHeader.vue'
import NavBar from '@/components/NavBar/NavBar.vue';
</script>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
