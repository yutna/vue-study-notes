<script setup>
  import { ref } from "vue";

  // Reactive states
  const ok = ref(true);
</script>

<template>
  <h1 v-show="ok">Hello!</h1>
</template>
