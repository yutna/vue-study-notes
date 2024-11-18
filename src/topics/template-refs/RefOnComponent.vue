<script setup>
  import { onMounted, useTemplateRef } from "vue";
  import MyChild from "./MyChild.vue";

  const childRef = useTemplateRef("child");

  onMounted(() => {
    // this will hold an instance of <Child /> component
    console.log(childRef.value.b);
  });
</script>

<template>
  <MyChild ref="child" />
</template>
