<script setup>
  import { ref } from "vue";

  // Reactive state
  const text = ref("Hello!");
</script>

<template>
  <input :value="text" @input="(event) => (text = event.target.value)" type="text" />
</template>
