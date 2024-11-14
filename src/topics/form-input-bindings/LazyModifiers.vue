<script setup>
  import { ref } from "vue";

  // Reactive states
  const msg = ref("");
</script>

<template>
  <p>Message: {{ msg }}</p>
  <!-- synced after "change" instead of "input" -->
  <input v-model.lazy="msg" type="text" />
</template>
