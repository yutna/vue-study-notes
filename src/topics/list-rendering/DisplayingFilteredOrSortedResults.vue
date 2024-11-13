<script setup>
  import { computed, ref } from "vue";

  // Reactive states
  const numbers = ref([1, 2, 3, 4, 5]);
  const sets = ref([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
  ]);

  // Computed properties
  const evenNumbers = computed(() => {
    return numbers.value.filter((n) => n % 2 === 0);
  });

  // Be careful with `reverse()` and `sort()` in computed properties!
  // These two method will mutate the original array, which should be
  // avoid in computed getters. Create a copy of the original array
  // before calling these methods.
  // return numbers.reverse() ❌
  // return [...numbers].reverse() ✅

  // Functions
  function even(numbers) {
    return numbers.filter((number) => number % 2 === 0);
  }
</script>

<template>
  <ul>
    <li :key="n" v-for="n in evenNumbers">{{ n }}</li>
  </ul>

  <!-- In situation where computed properties are not feasible -->
  <!-- (inside nested v-for loops), you can use a method -->
  <ul :key="`parent-${index}`" v-for="(numbers, index) in sets">
    <li :key="`child-${n}`" v-for="n in even(numbers)">{{ n }}</li>
  </ul>
</template>
