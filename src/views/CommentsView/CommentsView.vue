<template>
  <div class="comments__wrapper view-wrapper">
    <AtomSpinner v-if="isLoading" />

    <ul v-else class="comments">
      <li
        class="comment"
        v-for="comment in comments"
        :key="comment.id"
        @click="$router.push(`${RoutePaths.COMMENTS}/${comment.id}`)"
        :comment="comment"
      >
        <h2 class="comment__email">{{ comment.email }}</h2>
        <h3 class="comment__body">{{ comment.body }}</h3>
        <h5>{{ `Comment to post ${comment.postId}` }}</h5>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AtomSpinner from '@/components/AtomSpinner/AtomSpinner.vue'
import { RoutePaths } from '@/constants/route.constants'
import { storeToRefs } from 'pinia'
import { useCommentsStore } from '@/stores/comments'

const commentsStore = useCommentsStore()
const { comments, isLoading } = storeToRefs(commentsStore)
const { getComments } = commentsStore

onMounted(getComments)
</script>

<style src="../view.style.scss" scoped></style>
<style src="./CommentsView.style.scss" scoped></style>
