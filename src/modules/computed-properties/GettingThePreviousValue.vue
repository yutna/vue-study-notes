<script setup>
  import { computed, ref } from "vue";

  // Reactive states
  const count = ref(2);

  // Computed properties
  const alwaysSmall = computed((previous) => {
    if (count.value <= 3) {
      return count.value;
    }

    return previous;
  });

  const alwaysSmall2 = computed({
    get(previous) {
      if (count.value <= 3) {
        return count.value;
      }

      return previous;
    },
    set(newValue) {
      count.value = newValue * 2;
    },
  });
</script>

<template>
  <div>{{ alwaysSmall }}</div>
  <div>{{ alwaysSmall2 }}</div>
</template>
