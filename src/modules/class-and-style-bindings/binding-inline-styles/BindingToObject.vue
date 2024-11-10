<script setup>
  import { reactive, ref } from "vue";

  // Reactive states
  const activeColor = ref("red");
  const fontSize = ref(30);
  const styleObject = reactive({
    color: "red",
    fontSize: "30px",
  });

  // NOTE: object style binding is often used in conjuction with computed properties.
</script>

<template>
  <!-- style can use on both camelCase and kabab-case -->
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
  <div :style="{ 'font-size': fontSize + 'px' }"></div>
  <div :style="styleObject"></div>
</template>
