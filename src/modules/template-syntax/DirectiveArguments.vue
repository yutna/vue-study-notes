<template>
  <!-- It is also possible to use a JavaScript expression in a directive argument by wrapping it with square brackets -->
  <a v-bind:[attributeName]="url"></a>
  <a :[attributeName]="url"></a>

  <!-- You can use dynamic arguments to bind a handler to a dynamic event name -->
  <a v-on:[eventName]="doSomething"></a>
  <a @[eventName]="doSomething"></a>

  <!-- Dynamic Argument value constraints -->
  <!-- The value should be string or null only -->

  <!-- Dynamic Argument syntax constraints -->
  <!-- <a :['foo' + bar]="value">This will trigger a comiler error</a> -->
  <!-- Use computed property to solve this problem instead -->

  <!-- Modifiers -->
  <!-- Modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some special way. -->
</template>
