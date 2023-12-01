<template>
  <div class="post-wrapper">
    <AtomSpinner v-if="isLoading" />
    <div v-else-if="post" class="post">
      <h2 class="post__title">{{ post?.title }}</h2>
      <v-divider thickness="2"></v-divider>
      <p>{{ post?.body }}</p>
    </div>
    <div v-else>Post not found</div>
    <div v-if="isError">Error!</div>
  </div>
</template>

<script setup lang="ts">
import AtomSpinner from '@/components/AtomSpinner/AtomSpinner.vue'
import { usePostsStore } from '@/stores/posts'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const postsStore = usePostsStore()

const { post, isError, isLoading } = storeToRefs(postsStore)
const { getPost } = postsStore

onMounted(getPost)
</script>

<style src="./PostView.style.scss" lang="scss" scoped></style>
