<script setup>
  import { ref, watch } from "vue";

  // Reactive states
  const question = ref("");
  const answer = ref("Questions usually contain a question mark. ;-)");
  const loading = ref(false);

  // watch works directly on a ref
  watch(question, async (newQuestion) => {
    if (newQuestion.includes("?")) {
      loading.value = true;
      answer.value = "Thinking...";

      try {
        const res = await fetch("https://yesno.wtf/api");
        answer.value = (await res.json()).answer;
      } catch (error) {
        answer.value = "Error! Could not reach the API. " + error;
      } finally {
        loading.value = false;
      }
    }
  });
</script>

<template>
  <p>
    Ask a yes/no question:
    <input :disabled="loading" v-model="question" type="text" />
  </p>
  <p>{{ answer }}</p>
</template>
