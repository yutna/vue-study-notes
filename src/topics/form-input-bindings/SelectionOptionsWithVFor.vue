<script setup>
  import { ref } from "vue";

  // Reactive states
  const selected = ref("A");
  const options = ref([
    { text: "One", value: "A" },
    { text: "Two", value: "B" },
    { text: "Three", value: "C" },
  ]);
</script>

<template>
  <div>Selected: {{ selected }}</div>
  <select v-model="selected">
    <option :key="option.value" :value="option.value" v-for="option in options">
      {{ option.text }}
    </option>
  </select>
</template>
