<script setup>
  import { onMounted, onUnmounted, onUpdated } from "vue";

  onMounted(() => {
    console.log(`the component is now mounted.`);
  });

  onUnmounted(() => {
    console.log(`the component is now unmounted`);
  });

  onUpdated(() => {
    console.log(`the component is now updated`);
  });
</script>

<template>
  <div></div>
</template>
