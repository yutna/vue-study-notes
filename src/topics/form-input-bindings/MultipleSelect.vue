<script setup>
  import { ref } from "vue";

  // Reactive states
  const selected = ref([]);
</script>

<template>
  <div>Selected: {{ selected }}</div>
  <select v-model="selected" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
</template>
