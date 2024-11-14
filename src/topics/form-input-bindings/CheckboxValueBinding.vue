<script setup>
  import { ref } from "vue";

  // Reactive states
  const toggle = ref("no");
  // Case dynamic true/false values
  const userPreference = ref("active");
  const dynamicTrueValue = ref("active");
  const dynamicFalseValue = ref("inactive");
</script>

<template>
  <div>Value: {{ toggle }}</div>
  <input false-value="no" true-value="yes" v-model="toggle" type="checkbox" />

  <hr />

  <div>User Preference: {{ userPreference }}</div>
  <input
    :false-value="dynamicFalseValue"
    :true-value="dynamicTrueValue"
    v-model="userPreference"
    type="checkbox"
  />
</template>
