<script setup>
  import { computed, reactive } from "vue";

  // Reactive states
  const author = reactive({
    name: "John Doe",
    books: ["Vue 2 - Advanced Guide", "Vue 3 - Basic Guide", "Vue 4 - The Mystery"],
  });

  // Computed properties
  const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? "Yes" : "No";
  });
</script>

<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</template>
