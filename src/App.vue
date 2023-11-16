<script setup lang="ts">
import AppHeader from './components/AppHeader/AppHeader.vue'
import AppContent from './components/AppContent/AppContent.vue'
import AppFooter from './components/AppFooter/AppFooter.vue'
</script>

<template>
  <v-app>
      <div class="app-wrapper">
        <AppHeader />
        <AppContent />
        <AppFooter />
      </div>
  </v-app>
</template>

<style src="./App.styles.scss" scoped></style>
