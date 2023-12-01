import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import type { IUser } from './stores.types'

export const useUsersStore = defineStore('users', () => {
  const isLoading = ref(false)
  const isError = ref(false)

  const users = ref<IUser[]>([])
  const user = ref<IUser>()

  const route = useRoute()

  const baseUrl: string = import.meta.env.VITE_BASE_URL

  async function getUsers() {
    try {
      isLoading.value = true
      const res = await axios.get(`${baseUrl}/users/`)
      users.value = res.data
      isLoading.value = false
      isError.value = false
    } catch (error) {
      isError.value = true
      console.log(error, 'Error while fetching users')
    } finally {
      isError.value = false
    }
  }

  async function getUser() {
    try {
      isLoading.value = true
      const res = await axios.get(`${baseUrl}/users/${route.params.id}`)
      user.value = res.data
      isLoading.value = false
      isError.value = false
    } catch (error) {
      isError.value = true
      console.log(error, 'Error while fetching user')
    } finally {
      isError.value = false
    }
  }

  return {
    users,
    user,
    isLoading,
    isError,
    getUsers,
    getUser
  }
})
