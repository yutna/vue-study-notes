<script setup>
  // Functions
  function say(message) {
    console.log(message);
  }
</script>

<template>
  <button @click="say('hello')" type="button">Say hello</button>
  <button @click="say('bye')" type="button">Say bye</button>
</template>
