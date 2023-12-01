<template>
  <div class="user__wrapper">
    <AtomSpinner v-if="isLoading" />
    <div v-else-if="user" class="user">
      <h1>{{ user?.username }}</h1>
      <v-divider thickness="2"></v-divider>
      <p>{{  `Name: ${user?.name}` }}</p>
      <p>{{  `Email: ${user?.email}` }}</p>
      <p>{{  `Phone: ${user?.phone}` }}</p>
      <p>{{  `Website: ${user?.website}` }}</p>

    </div>
    <div v-else>Post not found</div>
    <div v-if="isError">Error!</div>
  </div>
</template>

<script setup lang="ts">
import AtomSpinner from '@/components/AtomSpinner/AtomSpinner.vue'
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const usersStore = useUsersStore()

const { user, isError, isLoading } = storeToRefs(usersStore)
const { getUser } = usersStore

onMounted(getUser)
</script>

<style src="./UserView.style.scss" lang="scss" scoped></style>
