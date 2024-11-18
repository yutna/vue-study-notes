<script setup>
  import { ref } from "vue";

  const value = ref("");

  function inputRef(element) {
    console.log(element.value);
  }
</script>

<template>
  <input :ref="inputRef" v-model="value" type="text" />
</template>
