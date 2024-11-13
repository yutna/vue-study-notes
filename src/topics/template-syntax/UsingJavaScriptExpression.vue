<template>
  <!-- In Vue templates, JavaScript expressions can be used in the following positions: -->
  <!-- 1. Inside text interpolations (mustaches) -->
  <!-- 2. In the attribute value of any Vue directives -->
  {{ number + 1 }}
  {{ ok ? "YES" : "NO" }}
  {{ message.split("").reverse().join("") }}
  <div :id="`list-${id}`"></div>

  <!-- Expressions only -->
  <!-- {{  var a = 1 }} -> this is a statement, not expression -->
  <!-- if (ok) { return message } -> don't work, use ternary instead -->

  <!-- Calling functions -->
  <!-- It is possible to call a component-exposed method inside a binding expression -->
  <!-- NOTE:
   functions called inside binding expressions will be called every time the component updates,
   so they should NOT have any side effects, such as changing data or triggering asynchronous operations.
  -->

  <time :title="toTitleDate(date)" :datetime="date">
    {{ formatDate(date) }}
  </time>

  <!-- Restricted Globals Access -->
  <!-- Template expressions are sandboxed and only have access to a restricted list of globals such as Math, Date etc. -->
  <!-- Globals not explicitly included in the list, for example user-attached properties on `window`, will not accessible -->
  <!-- in template expression. however, explicitly define additional globals for all Vue expressions by adding them to -->
  <!-- `app.config.globalProperties` -->
</template>
