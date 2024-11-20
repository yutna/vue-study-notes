<script setup>
  const props = defineProps(["title"]);
  const emit = defineEmits(["enlarge-text"]);
  console.log(props.title);
</script>

<template>
  <article class="blog-post">
    <h1>{{ title }}</h1>
    <button @click="emit('enlarge-text')" type="button">Enlarge Text</button>
  </article>
</template>
