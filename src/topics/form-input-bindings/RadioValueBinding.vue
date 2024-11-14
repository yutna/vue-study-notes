<script setup>
  import { ref } from "vue";

  // Reactive states
  const pick = ref(null);
  const first = ref("1");
  const second = ref("2");
</script>

<template>
  <p>Pick: {{ pick }}</p>
  <input :value="first" v-model="pick" type="radio" /> First <br />
  <input :value="second" v-model="pick" type="radio" /> Second
</template>
