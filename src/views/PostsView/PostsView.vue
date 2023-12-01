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
import { onMounted } from 'vue'
import AtomSpinner from '@/components/AtomSpinner/AtomSpinner.vue'
import { RoutePaths } from '@/constants/route.constants'
import { usePostsStore } from '@/stores/posts'
import { storeToRefs } from 'pinia'

const postsStore = usePostsStore()
const { posts, isLoading } = storeToRefs(postsStore)
const { getPosts } = postsStore

onMounted(getPosts)
</script>

<style src="../view.style.scss" scoped></style>
<style src="./PostsView.style.scss" scoped></style>
