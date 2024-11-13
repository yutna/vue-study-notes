<template>
  <!-- Using v-bind -->
  <div v-bind:id="dynamicId"></div>
  <!-- Shorthand -->
  <div :id="dynamicId"></div>
  <!-- Same-name shorthand -->
  <!-- Same as :id="id" -->
  <div :id></div>
  <!-- This also works (Shorthand using v-bind) -->
  <div v-bind:id></div>

  <!-- Boolean attributes -->
  <!-- If disabled="", it still included, for other falsy values, the attribute will be omitted -->
  <button :disabled="isButtonDisabled">Button</button>

  <!-- Dynamic binding multiple attributes -->
  <!-- You can bind them to a single element by using `v-bind` without argument -->
  <div v-bind="objectOfAttrs"></div>
</template>

<script setup>
  const objectOfAttrs = {
    id: "container",
    class: "wrapper",
    style: "background-color: green",
  };
</script>
