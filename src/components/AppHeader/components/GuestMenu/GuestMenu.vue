<template>
  <v-list class="menu-list">
    <v-list-item class="menu-list__item">
      <router-link to="/auth">
        <p>Log in</p>
      </router-link>
    </v-list-item>
    <v-list-item class="menu-list__item">
      <p>Sign up</p>
    </v-list-item>
  </v-list>
  
</template>

<script setup lang="ts"></script>

<style src="@/components/AppHeader/AppHeader.style.scss" scoped></style>
