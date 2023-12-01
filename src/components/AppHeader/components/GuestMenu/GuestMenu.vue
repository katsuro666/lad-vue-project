<template>
  <v-list class="menu-list">
    <v-list-item class="menu-list__item">
      <router-link :to="loginPath">Log in</router-link>
    </v-list-item>
    <v-list-item class="menu-list__item">
      <router-link :to="signUpPath">Sign up</router-link>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { RoutePaths } from '@/constants/route.constants'

const loginPath = RoutePaths.LOGIN
const signUpPath = RoutePaths.SIGNUP
</script>

<style src="@/components/AppHeader/AppHeader.style.scss" scoped></style>
