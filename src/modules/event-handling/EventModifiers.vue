<script setup>
  // Functions
  function doThis() {}
  function onSubmit() {}
  function doThat() {}
  function onScroll() {}
</script>

<template>
  <!-- the click event's propagation will be stopped -->
  <a @click.stop="doThis"></a>

  <!-- the submit event will no longer reload the page -->
  <form @submit.prevent="onSubmit"></form>

  <!-- modifiers can be chained -->
  <a @click.stop.prevent="doThat"></a>

  <!-- just the modifier -->
  <form @submit.prevent></form>

  <!-- only trigger handler if event.target is the element itself -->
  <!-- i.e. not from a child element -->
  <div @click.self="doThat"></div>

  <!-- use capture mode when adding the event listener -->
  <!-- i.e. an event targeting an inner element is handled -->
  <!-- here before being handled by that element -->
  <div @click.capture="doThis"></div>

  <!-- the click event will be triggered at most once -->
  <a @click.once="doThat"></a>

  <!-- the scroll event's default behavior (scrolling) will happen -->
  <!-- immediatly, instead of waiting for `onScroll` to complete -->
  <!-- in case it contains `event.preventDefault()` -->
  <div @scroll.passive="onScroll"></div>
</template>
