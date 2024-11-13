<script setup>
  import { ref } from "vue";

  // Reactive states
  const awesome = ref(true);
</script>

<template>
  <button @click="awesome = !awesome" type="button">Toggle</button>

  <h1 v-if="awesome">Vue is awesome</h1>
  <h1 v-else>Oh no 😢</h1>
</template>
