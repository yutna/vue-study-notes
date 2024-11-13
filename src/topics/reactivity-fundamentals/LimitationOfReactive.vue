<script setup>
  import { reactive } from "vue";

  // 1. It only works for object types (object, array, Collection types such as Map and Set),
  //    it cannot hold primitive types such as string, number or boolean
  // 2. Cannot replace entire object
  let state = reactive({ count: 0 });
  // the above reference ({ count: 0 }) is no longer being tracked
  // reactivity connection is lost
  state = reactive({ count: 1 });
  console.log(state);

  // 3. Not destructure friendly:
  const myState = reactive({ count: 3 });
  // count is disconnected from state.count when destructured.
  let { count } = myState;
  // does not affect original state
  count++;
  console.log(myState.count);
  console.log(count);

  // the function receives a plain number and won't be able to track changes
  // to state.count. we have to pass the entire objecct in to retain reactivity
  // callSomeFunction(myState.count)
</script>

<template>
  <div></div>
</template>
