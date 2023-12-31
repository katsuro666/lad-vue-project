import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type IPost } from './stores.types'
import axios from 'axios'
import { useRoute } from 'vue-router'

export const usePostsStore = defineStore('posts', () => {
  const isLoading = ref(false)
  const isError = ref(false)

  const posts = ref<IPost[]>([])
  const post = ref<IPost>()

  const route = useRoute()

  const baseUrl: string = import.meta.env.VITE_BASE_URL

  async function getPosts() {
    try {
      isLoading.value = true
      const res = await axios.get(`${baseUrl}/posts/`)
      posts.value = res.data
      isLoading.value = false
      isError.value = false
    } catch (error) {
      isError.value = true
      console.log(error, 'Error while fetching posts')
    } finally {
      isError.value = false
    }
  }

  async function getPost() {
    try {
      isLoading.value = true
      const res = await axios.get(`${baseUrl}/posts/${route.params.id}`)
      post.value = res.data
      isLoading.value = false
      isError.value = false
    } catch (error) {
      isError.value = true
      console.log(error, 'Error while fetching post')
    } finally {
      isError.value = false
    }
  }

  return {
    posts,
    post,
    isLoading,
    isError,
    getPosts,
    getPost
  }
})
