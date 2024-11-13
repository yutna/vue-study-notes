<script setup>
  import { ref } from "vue";

  // Reactive state
  const count = ref(0);
</script>

<template>
  <button @click="count++" type="button">Add 1</button>
  <p>Count is: {{ count }}</p>
</template>
