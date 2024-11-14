<script setup>
  import { ref, watch } from "vue";

  // Reactive states
  const source = ref("");

  // Watchers
  watch(
    source,
    (newValue, oldValue) => {
      // when `source` changes, triggers only once
      console.log(newValue);
      console.log(oldValue);
    },
    { once: true },
  );
</script>

<template>
  <div></div>
</template>
