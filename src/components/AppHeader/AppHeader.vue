<template>
  <v-app-bar app scroll-behavior="collapse" :elevation="0" class="app-header">
    <v-app-bar-nav-icon @click="drawer = !drawer">
      <svg-icon type="mdi" :path="mdiMenu"></svg-icon>
    </v-app-bar-nav-icon>
    <v-toolbar-title>My app name</v-toolbar-title>

    <v-menu transition="scale-transition">
      <template v-slot:activator="{ props }">
        <v-btn @click.prevent class="header__buttons" :flat="true" v-bind="props">
          <svg-icon
            v-if="currentTheme === 'lightTheme'"
            type="mdi"
            :path="mdiWhiteBalanceSunny"
          ></svg-icon>
          <svg-icon
            v-else-if="currentTheme === 'darkTheme'"
            type="mdi"
            :path="mdiWeatherNight"
          ></svg-icon>
          <svg-icon v-else-if="currentTheme === null" type="mdi" :path="mdiMonitor"></svg-icon>
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
        <v-btn @click.prevent class="header__buttons" :flat="true" v-bind="props">
          <svg-icon type="mdi" :path="mdiAccount"></svg-icon>
        </v-btn>
      </template>

      <GuestMenu />
      <!-- 
          <UserMenu /> 
          if user is logged in 
        -->
    </v-menu>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" absolute temporary app>
    <v-list nav dense>
      <v-list-item v-for="(item, i) in items" :key="i" :value="item">
        <router-link :to="item.path">
          <v-list-item>
            <template v-slot:prepend>
              <svg-icon type="mdi" :path="item.icon"></svg-icon>
            </template>
            <v-list-item-title class="drawer__title">{{ item.text }}</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import {
  mdiWeatherNight,
  mdiWhiteBalanceSunny,
  mdiMonitor,
  mdiAccount,
  mdiMenu,
  mdiHome,
  mdiInformationOutline,
  mdiMessageOutline
} from '@mdi/js'
import UserMenu from './components/UserMenu/UserMenu.vue'
import GuestMenu from './components/GuestMenu/GuestMenu.vue'
import { ref } from 'vue'
import { RouteNames, RoutePaths } from '@/constants/route.constants'
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'

const drawer = ref(false)

const items = [
  { text: RouteNames.HOME, icon: mdiHome, path: RoutePaths.HOME },
  { text: RouteNames.ABOUT, icon: mdiInformationOutline, path: RoutePaths.ABOUT },
  { text: RouteNames.POSTS, icon: mdiMessageOutline, path: RoutePaths.POSTS }
]

const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)
const { changeTheme } = themeStore
</script>

<style src="./AppHeader.style.scss" scoped></style>
