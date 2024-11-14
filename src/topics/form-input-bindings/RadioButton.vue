<script setup>
  import { ref } from "vue";

  // Reactive states
  const picked = ref("");
</script>

<template>
  <div>Picked: {{ picked }}</div>

  <input v-model="picked" id="one" value="One" type="radio" />
  <label for="one">One</label>

  <input v-model="picked" id="two" value="Two" type="radio" />
  <label for="two">Two</label>
</template>
