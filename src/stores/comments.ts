import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type IComment } from './stores.types'
import axios from 'axios'
import { useRoute } from 'vue-router'

export const useCommentsStore = defineStore('comments', () => {
  const isLoading = ref(false)
  const isError = ref(false)

  const comments = ref<IComment[]>([])
  const comment = ref<IComment>()

  const route = useRoute()

  const baseUrl: string = import.meta.env.VITE_BASE_URL

  async function getComments() {
    try {
      isLoading.value = true
      const res = await axios.get(`${baseUrl}/comments`)
      comments.value = res.data
      isLoading.value = false
      isError.value = false
    } catch (error) {
      isError.value = true
      console.log(error, 'Error while fetching comments')
    } finally {
      isError.value = false
    }
  }

  async function getComment() {
    try {
      isLoading.value = true
      const res = await axios.get(`${baseUrl}/comments/${route.params.id}`)
      comment.value = res.data
      isLoading.value = false
      isError.value = false
    } catch (error) {
      isError.value = true
      console.log(error, 'Error while fetching comment')
    } finally {
      isError.value = false
    }
  }

  return {
    comments,
    comment,
    isLoading,
    isError,
    getComments,
    getComment
  }
})
