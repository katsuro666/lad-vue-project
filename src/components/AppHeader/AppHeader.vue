<template>
  <div class="app-header">
    <h1 class="app-name">My app name</h1>
    <v-menu transition="scale-transition">
      <template v-slot:activator="{ props }">
        <v-btn class="theme-button" :flat="true" v-bind="props">
          <svg-icon
            v-if="selectedTheme === 'lightTheme'"
            type="mdi"
            :path="mdiWhiteBalanceSunny"
          ></svg-icon>
          <svg-icon
            v-else-if="selectedTheme === 'darkTheme'"
            type="mdi"
            :path="mdiWeatherNight"
          ></svg-icon>
          <svg-icon v-else-if="selectedTheme === null" type="mdi" :path="mdiMonitor"></svg-icon>
        </v-btn>
      </template>

      <v-list class="menu-list">
        <v-list-item @click="changeTheme('lightTheme')">
          <svg-icon type="mdi" :path="mdiWhiteBalanceSunny"></svg-icon>
        </v-list-item>

        <v-list-item @click="changeTheme('darkTheme')">
          <svg-icon type="mdi" :path="mdiWeatherNight"></svg-icon>
        </v-list-item>

        <v-list-item @click="changeTheme('systemTheme')">
          <svg-icon type="mdi" :path="mdiMonitor"></svg-icon>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { type AllThemesType } from './AppHeader.types'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiWeatherNight, mdiWhiteBalanceSunny, mdiMonitor } from '@mdi/js'
import { systemTheme, userTheme } from '@/plugin/theme'

const theme = useTheme()
let selectedTheme = userTheme

function changeTheme(themeTitle: AllThemesType) {
  if (themeTitle === 'systemTheme') {
    localStorage.removeItem('theme')
    theme.global.name.value = systemTheme
    selectedTheme = null
  } else {
    localStorage.setItem('theme', themeTitle)
    theme.global.name.value = themeTitle
    selectedTheme = themeTitle
  }
}
</script>

<style src="./AppHeader.style.scss" scoped></style>
