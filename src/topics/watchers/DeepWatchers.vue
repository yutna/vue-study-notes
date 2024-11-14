<script setup>
  import { reactive, watch } from "vue";

  // Reactive states
  const obj = reactive({ count: 0 });

  // Watchers
  watch(obj, (newValue, oldValue) => {
    // fires on nested property mutations
    // Note: `newValue` will be equal to `oldValue` here
    // because they both point to the same object!
    console.log("New Value:", newValue);
    console.log("Old Value:", oldValue);
  });

  watch(
    () => obj,
    (newValue, oldValue) => {
      // fires only when state.someObject is replaced
      console.log("New Value2:", newValue);
      console.log("Old Value2:", oldValue);
    },
  );

  watch(
    () => obj,
    (newValue, oldValue) => {
      // Note: `newValue` will be equal to `oldValue` here
      // *unless state.someObject has been replaced
      console.log("New Value3:", newValue);
      console.log("Old Value3:", oldValue);
    },
    { deep: true },
  );
</script>

<template>
  <button @click="obj.count++" type="button">increment</button>
</template>
