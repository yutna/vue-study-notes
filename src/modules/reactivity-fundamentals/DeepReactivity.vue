<script setup>
  import { ref } from "vue";

  // Reactive states
  const obj = ref({
    nested: { count: 0 },
    arr: ["foo", "bar"],
  });

  // Event handlers
  function mutateDeeply() {
    obj.value.nested.count++;
    obj.value.arr.push("baz");
  }
</script>

<template>
  <pre>{{ JSON.stringify(obj, null, 2) }}</pre>
  <button @click="mutateDeeply" type="button">Update!</button>
</template>
