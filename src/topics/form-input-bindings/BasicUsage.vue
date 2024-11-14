<script setup>
  import { ref } from "vue";

  // Reactive state
  const message = ref("");
</script>

<template>
  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="edit me" type="text" />
</template>
