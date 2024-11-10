<script setup>
  import { ref } from "vue";

  // Reactive states
  const parentMessage = ref("Parent");
  const items = ref([{ message: "Foo" }, { message: "Bar" }]);
</script>

<template>
  <ul>
    <li v-for="(item, index) in items">{{ parentMessage }} - {{ index }} - {{ item.message }}</li>
    <li v-for="{ message } in items">{{ message }}</li>
    <li v-for="({ message }, index) in items">{{ message }} {{ index }}</li>
  </ul>
</template>
