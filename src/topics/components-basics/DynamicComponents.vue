<script setup>
  import { ref } from "vue";

  import About from "./tabs/About.vue";
  import Contact from "./tabs/Contact.vue";
  import Home from "./tabs/Home.vue";

  // Reactive states
  const currentTab = ref("home");
  const tabs = {
    about: About,
    contact: Contact,
    home: Home,
  };
</script>

<template>
  <div class="demo">
    <button
      :class="['tab-button', { active: currentTab === tab }]"
      :key="tab"
      @click="currentTab = tab"
      v-for="(_, tab) in tabs"
      type="button"
    >
      {{ tab }}
    </button>
    <component :is="tabs[currentTab]"></component>
  </div>
</template>

<style>
  .demo {
    font-family: sans-serif;
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 20px 30px;
    margin-top: 1em;
    margin-bottom: 40px;
    user-select: none;
    overflow-x: auto;
  }

  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }

  .tab-button:hover {
    background: #e0e0e0;
  }

  .tab-button.active {
    background: #e0e0e0;
  }

  .tab {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>
