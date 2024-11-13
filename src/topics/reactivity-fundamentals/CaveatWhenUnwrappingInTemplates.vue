<script setup>
  import { ref } from "vue";

  // Ref unwrapping in templates only applies if the ref is a top-level property in
  // the template render context.
  // In the example below, `count` and `object` are top-level properties, but `object.id`
  // is not
  const count = ref(0);
  const object = { id: ref(1) };

  // destructure id into a top-level property to solve the problem
  const { id } = object;
</script>

<template>
  <!-- This expression works as expected -->
  <div>{{ count + 1 }}</div>

  <!-- ...while tihs one does NOT -->
  <!-- It will rendered as [object object] 1 -->
  <div>{{ object.id + 1 }}</div>

  <!-- when destructure the id  -->
  <div>{{ id + 1 }}</div>

  <!-- It will get unwrapped if it is the final evaluated value of text interpolation -->
  <div>{{ object.id }}</div>
</template>
