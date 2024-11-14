<script setup>
  import { ref, watch } from "vue";

  // Reactive states
  const source = ref("");

  // Watchers
  watch(
    source,
    (newValue, oldValue) => {
      // executed immediately, then again when `source` changes
      console.log("NewValue:", newValue);
      console.log("OldValue:", oldValue);
    },
    {
      immediate: true,
    },
  );
</script>

<template>
  <div></div>
</template>
