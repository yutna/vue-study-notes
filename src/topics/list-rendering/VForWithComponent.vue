<script setup>
  import { ref } from "vue";
  import MyComponent from "./MyComponent.vue";

  // Reactive states
  const items = ref([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ]);
</script>

<template>
  <MyComponent :index="index" :item="item" :key="item.id" v-for="(item, index) in items" />
</template>
