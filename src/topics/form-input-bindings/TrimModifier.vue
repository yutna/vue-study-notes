<script setup>
  import { ref } from "vue";

  // Reactive states
  const msg = ref("");
</script>

<template>
  <p>Msg: {{ msg.length }}</p>
  <input v-model.trim="msg" type="text" />
</template>
