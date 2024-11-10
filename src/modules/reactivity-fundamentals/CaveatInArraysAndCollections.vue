<script setup>
  import { reactive, ref } from "vue";

  // Unlike reactive objects, there is NO unwrapping performed when the ref
  // is accessed as an element of a reactive array or a native collection type like Map
  const books = reactive([ref("Vue 3 Guide")]);
  console.log(books[0].value); // need .value here

  const map = reactive(new Map([["count", ref(0)]]));
  console.log(map.get("count").value);
</script>

<template>
  <div></div>
</template>
