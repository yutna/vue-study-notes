<script setup>
  import { reactive } from "vue";

  // Reactive state
  const state = reactive({ count: 0 });

  const raw = {};
  const proxy = reactive(raw);

  // proxy is NOT equal to the original
  console.log(proxy === raw); // false

  // Proxy object ensure consistent access
  console.log(reactive(raw) === proxy); // true
  console.log(reactive(proxy) === proxy); // true
</script>

<template>
  <div>Count: {{ state.count }}</div>
  <button @click="state.count++" type="button">Increment</button>
</template>
