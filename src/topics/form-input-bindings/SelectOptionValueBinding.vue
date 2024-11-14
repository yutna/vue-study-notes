<script setup>
  import { ref } from "vue";

  // Reactive states
  const selected = ref({ number: 123 });
</script>

<template>
  <pre>{{ JSON.stringify(selected, null, 2) }}</pre>
  <select v-model="selected">
    <option :value="{ number: 123 }">123</option>
    <option :value="{ number: 456 }">456</option>
    <option :value="{ number: 789 }">456</option>
  </select>
</template>
