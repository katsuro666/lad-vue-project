<template>
  <div class="app-header">
    <router-link to="/">
      <h1 class="app-name">My app name</h1>
    </router-link>

    <div class="header__actions">
      <v-menu transition="scale-transition">
        <template v-slot:activator="{ props }">
          <v-btn class="header__buttons" :flat="true" v-bind="props">
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

      <v-menu transition="scale-transition">
        <template v-slot:activator="{ props }">
          <v-btn class="header__buttons" :flat="true" v-bind="props">
            <svg-icon type="mdi" :path="mdiAccount"></svg-icon>
          </v-btn>
        </template>

        <GuestMenu />
        <!-- <UserMenu /> -->
      </v-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { type AllThemesType } from './AppHeader.types'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiWeatherNight, mdiWhiteBalanceSunny, mdiMonitor, mdiAccount } from '@mdi/js'
import { systemTheme, userTheme } from '@/plugin/theme'
import UserMenu from './components/UserMenu/UserMenu.vue'
import GuestMenu from './components/GuestMenu/GuestMenu.vue'

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
