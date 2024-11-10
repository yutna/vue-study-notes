<script setup>
  import { ref } from "vue";

  // Reactive states
  const type = ref("B");
</script>

<template>
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
</template>
