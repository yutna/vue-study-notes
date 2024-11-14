<script setup>
  import { ref } from "vue";

  // Reactive states
  const age = ref(null);
</script>

<template>
  <p>Age: {{ typeof age }}</p>
  <input v-model.number="age" type="text" />
</template>
