<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

type Theme = "dark" | "light" | "system";

const theme = ref<Theme>("system");

const setTheme = (newTheme: Theme) => {
  theme.value = newTheme;
};

const applyTheme = (newTheme: Theme) => {
  const root = window.document.documentElement;
  root.classList.remove("light", "dark");

  if (newTheme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    root.classList.add(systemTheme);
    return;
  }

  root.classList.add(newTheme);
};

watch(theme, (newTheme) => {
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

onMounted(() => {
  const savedTheme = localStorage.getItem("theme") as Theme | null;
  if (savedTheme) {
    theme.value = savedTheme;
  }
  applyTheme(theme.value);
});

// Expose the theme state and setter
defineExpose({
  theme,
  setTheme,
});
</script>

<template>
  <slot />
</template>
