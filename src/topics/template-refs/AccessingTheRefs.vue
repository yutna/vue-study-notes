<script setup>
  import { onMounted, useTemplateRef } from "vue";

  const input = useTemplateRef("my-input");

  onMounted(() => {
    input.value.focus();
  });
</script>

<template>
  <input ref="my-input" />
</template>
