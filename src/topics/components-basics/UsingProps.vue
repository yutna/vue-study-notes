<script setup>
  import { ref } from "vue";
  import BlogPost from "./BlogPost.vue";

  const posts = ref([
    { id: 1, title: "My journey with Vue" },
    { id: 2, title: "Blogging with Vue" },
    { id: 3, title: "Why Vue is so fun" },
  ]);
</script>

<template>
  <BlogPost :key="post.id" :title="post.title" v-for="post in posts" />
</template>
