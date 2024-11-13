<script setup>
  // Functions
  function warn(message, event) {
    if (event) {
      event.preventDefault();
    }

    console.log(message);
  }
</script>

<template>
  <!-- using $event special variable -->
  <button @click="warn('Form cannot be submitted yet.', $event)" type="button">Submit</button>

  <!-- using inline arrow function -->
  <button @click="(event) => warn('Form cannot be submitted yet.', event)" type="button">
    Submit
  </button>
</template>
