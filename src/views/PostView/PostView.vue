<template>
  <div class="view-wrapper">
    <div class="post">Post {{ route.params.id }}</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

  const route = useRoute()
</script>

<style src="./PostView.style.scss" scoped></style>
<style src="../view.style.scss" scoped>

</style>