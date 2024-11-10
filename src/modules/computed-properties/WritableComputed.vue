<script setup>
  import { computed, ref } from "vue";

  const firstName = ref("John");
  const lastName = ref("Doe");

  const fullName = computed({
    get() {
      return firstName.value + " " + lastName.value;
    },
    set(newValue) {
      [firstName.value, lastName.value] = newValue.split(" ");
    },
  });
</script>

<template>
  <div>{{ fullName }}</div>
</template>
