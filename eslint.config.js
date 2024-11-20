import js from "@eslint/js";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";
import pluginVue from "eslint-plugin-vue";

export default [
  {
    files: ["**/*.{js,mjs,jsx,vue}"],
    name: "app/files-to-lint",
  },
  {
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
    name: "app/files-to-ignore",
  },
  js.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  skipFormatting,
  {
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
];
