<script setup>
  import { ref } from "vue";

  // Reactive states
  const name = ref("Vue.js");

  // Event handlers
  function greet(event) {
    console.log(`Hello ${name.value}!`);

    if (event) {
      console.log(event.target.tagName);
    }
  }
</script>

<template>
  <button @click="greet" type="button">Greet</button>
</template>
