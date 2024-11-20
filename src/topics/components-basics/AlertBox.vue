<template>
  <div class="alert-box">
    <strong>This is an error for Demo purposes</strong>
    <slot />
  </div>
</template>

<style scoped>
  .alert-box {
    display: flex;
    flex-direction: column;
  }
</style>
