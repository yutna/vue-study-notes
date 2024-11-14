<script setup>
  import { ref } from "vue";

  // Reactive states
  const checked = ref(false);
</script>

<template>
  <input v-model="checked" id="checkbox" type="checkbox" />
  <label for="checkbox">{{ checked }}</label>
</template>
