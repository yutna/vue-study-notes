<script setup>
  import { ref } from "vue";

  // Reactive states
  const baseStyles = ref({
    color: "black",
    fontSize: "1rem",
    lineHeight: 1,
  });

  const overridingStyles = ref({
    color: "red",
    lineHeight: 1.6,
  });
</script>

<template>
  <div :style="[baseStyles, overridingStyles]"></div>
</template>
