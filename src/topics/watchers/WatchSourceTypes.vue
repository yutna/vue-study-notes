<script setup>
  import { reactive, ref, watch } from "vue";

  // Reactive states
  const x = ref(0);
  const y = ref(0);
  const obj = reactive({ count: 0 });

  //  Single ref
  watch(x, (newX) => {
    console.log(`x is ${newX}`);
  });

  // Getter
  watch(
    () => x.value + y.value,
    (sum) => {
      console.log(`sum of x + y is : ${sum}`);
    },
  );

  // Array of multiple sources
  watch([x, () => y.value], ([newX, newY]) => {
    console.log(`x is ${newX} and y is ${newY}`);
  });

  // this won't work because we are passing a number to watch()
  watch(obj.count, (count) => {
    console.log(`Count is: ${count}`);
  });

  // Instead, use a getter:
  watch(
    () => obj.count,
    (count) => {
      console.log(`Count is: ${count}`);
    },
  );
</script>

<template>
  <div></div>
</template>
