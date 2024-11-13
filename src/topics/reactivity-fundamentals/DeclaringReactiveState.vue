<script setup>
  import { ref } from "vue";

  // Reactive states
  const count = ref(0);

  // Event handlers
  function increment() {
    count.value++;
  }
</script>

<!--
  NOTE:
  Top-level imports, variables and functions declared in `<script setup>` are automatically
  usable in the template of the same component. Think of the template as a JavaScript function
  declared in the same scope - it naturally has access to everything declared alongside it.
-->

<template>
  <button @click="increment" type="button">{{ count }}</button>
</template>
