<template>
  <v-app>
    <MainLayout>
      <router-view />
    </MainLayout>
  </v-app>
</template>

<script setup lang="ts">
import MainLayout from './layouts/MainLayout/MainLayout.vue'
</script>

<style scoped></style>
