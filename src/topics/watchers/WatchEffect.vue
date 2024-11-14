<script setup>
  import { ref, watchEffect } from "vue";

  // Reactive states
  const todoId = ref(1);
  const data = ref(null);

  // Watchers
  watchEffect(async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
    data.value = await response.json();
  });
</script>

<template>
  <pre>{{ JSON.stringify(data, null, 2) }}</pre>
</template>
