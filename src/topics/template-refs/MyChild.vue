<script setup>
  import { ref } from "vue";

  const a = 1;
  const b = ref(2);

  defineExpose({
    a,
    b,
  });
</script>

<template>
  <h1>Hello, world!</h1>
</template>
