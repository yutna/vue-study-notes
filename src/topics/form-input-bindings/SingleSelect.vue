<script setup>
  import { ref } from "vue";

  // Reactive states
  const options = ref(["A", "B", "C"]);
  const selected = ref("");
</script>

<template>
  <div>Selected: {{ selected }}</div>
  <select v-model="selected">
    <!-- this option is important on iOS -->
    <option disabled value="">Please select one</option>
    <option :key="option" v-for="option in options">{{ option }}</option>
  </select>
</template>
