<template>
  <div class="users__wrapper view-wrapper">
    <AtomSpinner v-if="isLoading" />

    <ul v-else class="users">
      <li
        class="user"
        v-for="user in users"
        :key="user.id"
        @click="$router.push(`${RoutePaths.USERS}/${user.id}`)"
        :user="user"
      >
        <h2 class="user__username">{{ user.username }}</h2>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AtomSpinner from '@/components/AtomSpinner/AtomSpinner.vue'
import { RoutePaths } from '@/constants/route.constants'
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'

const usersStore = useUsersStore()
const { users, isLoading } = storeToRefs(usersStore)
const { getUsers } = usersStore

onMounted(getUsers)
</script>

<style src="../view.style.scss" scoped></style>
<style src="./UsersView.style.scss" scoped></style>
