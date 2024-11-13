<script setup>
  import { ref } from "vue";

  // When working on non-mutation method on the array e.g. filter, concat, slice (always returns new array)
  // We should replace the old array with the new one.
  const items = ref([{ message: "Foo" }, { message: "Bar" }]);
  items.value = items.value.filter((item) => item.message.match(/Foo/));
</script>
