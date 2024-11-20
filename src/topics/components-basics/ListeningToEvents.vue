<script setup>
  import { ref } from "vue";
  import BlogPost from "./BlogPost.vue";

  const postFontSize = ref(1);
  const posts = ref([
    { id: 1, title: "My journey with Vue" },
    { id: 2, title: "Blogging with Vue" },
    { id: 3, title: "Why Vue is so fun" },
  ]);
</script>

<template>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
      v-for="post in posts"
    />
  </div>
</template>
