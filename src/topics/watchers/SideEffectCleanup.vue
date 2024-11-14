<script setup>
  import { ref, watch } from "vue";

  // Reactive states
  const id = ref(1);
  const data = ref(null);

  // Event handlers
  function handleClick() {
    id.value = id.value + 1;
  }

  // Watchers
  // watch(
  //   id,
  //   (newId) => {
  //     const controller = new AbortController();

  //     fetch(`https://jsonplaceholder.typicode.com/todos/${newId}`, {
  //       signal: controller.signal,
  //     })
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((json) => {
  //         data.value = json;
  //       });

  //     onWatcherCleanup(() => {
  //       controller.abort();
  //     });
  //   },
  //   { immediate: true },
  // );

  // Better than onWatcherCleanup
  watch(id, (newId, _, onCleanup) => {
    const controller = new AbortController();

    fetch(`https://jsonplaceholder.typicode.com/todos/${newId}`, {
      signal: controller.signal,
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        data.value = json;
      });

    onCleanup(() => {
      controller.abort();
    });
  });
</script>

<template>
  <p>ID: {{ id }}</p>
  <pre>{{ JSON.stringify(data, null, 2) }}</pre>
  <button @click="handleClick" type="button">Increment</button>
</template>
