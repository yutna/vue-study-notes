<script setup>
  import { ref } from "vue";

  // Reactive states
  // const names = ["Jack", "John", "Mike"];
  const checkedNames = ref([]);
</script>

<template>
  <div>Checked names: {{ checkedNames }}</div>

  <input v-model="checkedNames" id="jack" type="checkbox" value="Jack" />
  <label for="jack">Jack</label>

  <input v-model="checkedNames" id="john" type="checkbox" value="John" />
  <label for="jack">John</label>

  <input v-model="checkedNames" id="mike" type="checkbox" value="Mike" />
  <label for="mike">Mike</label>

  <!-- <hr />

  <template :key="`${name.toLowerCase()}`" v-for="name in names">
    <input :id="`${name.toLowerCase()}`" :value="name" v-model="checkedNames" type="checkbox" />
    <label :for="`${name.toLowerCase()}`">{{ name }}</label>
  </template> -->
</template>
