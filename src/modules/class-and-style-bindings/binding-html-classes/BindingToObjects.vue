<script setup>
  import { computed, reactive, ref } from "vue";

  // Reactive states
  const isActive = ref(true);
  const hasError = ref(false);
  const error = ref(null);

  const classObject = reactive({
    "active": true,
    "text-danger": false,
  });

  const bestPractice = computed(() => ({
    "active": isActive.value && !error.value,
    "text-danger": error.value && error.value.type === "fatal",
  }));
</script>

<template>
  <div :class="{ 'active': isActive, 'text-danger': hasError }" class="static"></div>
  <div :class="classObject"></div>
  <div :class="bestPractice"></div>
</template>
