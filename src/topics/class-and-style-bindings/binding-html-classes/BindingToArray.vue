<script setup>
  import { ref } from "vue";

  // Reactive states
  const isActive = ref(true);
  const activeClass = ref("active");
  const errorClass = ref("text-danger");
</script>

<template>
  <div :class="[activeClass, errorClass]"></div>
  <div :class="[isActive ? activeClass : '', errorClass]"></div>
  <div :class="[{ [activeClass]: isActive }, errorClass]"></div>
</template>
