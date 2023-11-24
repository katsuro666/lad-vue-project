<template>
  <div class="posts__wrapper view-wrapper">
    <AtomSpinner v-if="isLoading" />

    <ul v-else class="posts">
      <li
        class="post"
        v-for="post in posts"
        :key="post.id"
        @click="$router.push(`${RoutePaths.POSTS}/${post.id}`)"
        :post="post"
      >
        <h2 class="post__title">{{ post.title }}</h2>
        <p class="post__body">{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { onMounted } from 'vue'
import type { PostType } from './Posts.types'
import AtomSpinner from '@/components/AtomSpinner/AtomSpinner.vue'
import { RoutePaths } from '@/constants/route.constants'

const isLoading = ref(false)

const posts = ref<PostType[]>([])

const fetchPosts = async () => {
  isLoading.value = true
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
  posts.value = res.data
  isLoading.value = false
}

onMounted(fetchPosts)
</script>

<style src="../view.style.scss" scoped></style>
<style src="./PostsView.style.scss" scoped></style>
