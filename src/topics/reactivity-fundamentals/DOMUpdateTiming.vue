<!--
  NOTE: DOM updates are not applied synchronously. Instead, Vue buffers
  theme until the "next tick" in the update cycle to ensure that each
  component updates only once no matter how many state changes you have
  made.

  To wait for the DOM update to complete after a state change, you can use
  the `nextTick()` global API.
-->

<script setup>
  import { nextTick, ref } from "vue";

  const count = ref(0);

  async function increment() {
    count.value++;
    await nextTick();
    // Now the DOM is updated
  }
</script>

<template>
  <div>Count: {{ count }}</div>
  <button @click="increment" type="button">Increment</button>
</template>
