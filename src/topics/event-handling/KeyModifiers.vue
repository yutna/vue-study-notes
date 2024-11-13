<script setup>
  // Functions
  function sumbit() {}
  function onPageDown() {}
  function clear() {}
  function doSomething() {}
  function onCtrlClick() {}
  function onClick() {}
</script>

<template>
  <!-- only call `submit` when the key is `Enter` -->
  <input @keyup.enter="sumbit" />

  <!-- use any valid key names exposed via KeyboardEvent.key as modifiers by converting them to kebab-case -->
  <input @keyup.page-down="onPageDown" />

  <!-- Alt + Enter -->
  <input @keyup.alt.enter="clear" />

  <!-- Ctrl + Click -->
  <div @click.ctrl="doSomething">Do something</div>

  <!-- this will only fire when Ctrl and no other keys are pressed -->
  <button @click.ctrl.exact="onCtrlClick">A</button>

  <!-- this will only fire when no system modifiers are pressed -->
  <button @click.exact="onClick">A</button>
</template>
