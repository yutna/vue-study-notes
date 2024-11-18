<script setup>
  import { onMounted, ref, useTemplateRef } from "vue";

  const list = ref([
    { id: 1, name: "John", age: 28 },
    { id: 2, name: "Sarah", age: 32 },
    { id: 3, name: "Robert", age: 34 },
  ]);

  const itemRefs = useTemplateRef("items");

  onMounted(() => {
    console.log(itemRefs.value);
  });
</script>

<template>
  <ul>
    <li :key="item.id" ref="items" v-for="item in list">{{ item.name }} - {{ item.age }}</li>
  </ul>
</template>
