<template>
  <div class="comment__wrapper">
    <AtomSpinner v-if="isLoading" />
    <div v-else-if="comment" class="comment">
      <h1>{{ comment?.email }}</h1>
      <v-divider thickness="2"></v-divider>
      <p>{{ `Name: ${comment?.name}` }}</p>
      <p>{{ `Post: ${comment?.postId}` }}</p>
      <p>{{ `Comment: ${comment?.body}` }}</p>
    </div>
    <div v-else>Comment not found</div>
    <div v-if="isError">Error!</div>
  </div>
</template>

<script setup lang="ts">
import AtomSpinner from '@/components/AtomSpinner/AtomSpinner.vue'
import { useCommentsStore } from '@/stores/comments'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const commentsStore = useCommentsStore()

const { comment, isError, isLoading } = storeToRefs(commentsStore)
const { getComment } = commentsStore

onMounted(getComment)
</script>

<style src="./CommentView.style.scss" lang="scss" scoped></style>
