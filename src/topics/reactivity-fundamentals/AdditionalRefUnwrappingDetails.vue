<script setup>
  import { reactive, ref } from "vue";

  // As Reactive Object Property
  // A ref is automatically unwrapped when accessed or mutated as a property of a reactive object.
  // In other words, it behave like a normal property.
  const count = ref(0);
  const state = reactive({
    count,
  });

  console.log(state.count);
  state.count = 1;
  console.log(count.value);

  // if a new ref is assigned to a property linked to an existing ref, it will replace the old ref:
  const otherCount = ref(2);
  state.count = otherCount;
  console.log(state.count); // 2
  console.log(count.value); // 1, original ref is now disconnected from state.count
</script>

<template>
  <div></div>
</template>
