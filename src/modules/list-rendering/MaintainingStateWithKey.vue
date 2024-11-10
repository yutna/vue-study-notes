<script setup>
  import { ref } from "vue";

  // Reactive states
  const items = ref([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ]);
</script>

<template>
  <div :key="item.id" v-for="item in items">
    {{ item.name }}
  </div>

  <!-- When using v-for with template -->
  <ul>
    <template :key="item.id" v-for="item in items">
      <li>{{ item.name }}</li>
    </template>
  </ul>
</template>
