<template>
  <div class="app-header">
    <h1 class="app-name">My app name</h1>
    <v-btn @click="toggleTheme">toggle theme</v-btn>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  console.log(theme.global.current.value)
}
</script>

<style src="./AppHeader.style.scss" scoped></style>
