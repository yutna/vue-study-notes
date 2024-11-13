<script setup>
  import { ref } from "vue";

  // Reactive states
  const awesome = ref(true);
</script>

<template>
  <h1 v-if="awesome">Vue is awesome!</h1>
</template>
