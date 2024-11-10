<template>
  <template v-for="n in 10">
    <li v-if="n === 5">Five</li>
    <li v-else>{{ n }}</li>
  </template>
</template>
