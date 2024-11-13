<script setup>
  import { ref } from "vue";

  // Reactive states
  const ok = ref(true);
</script>

<template>
  <template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>
</template>
