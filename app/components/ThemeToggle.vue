<script setup lang="ts">
import { Button } from "~/components/ui/button";

// Use the built-in Nuxt color mode composable
const colorMode = useColorMode();

// Smart toggle between light, dark, and system modes
const smartToggle = () => {
  // Get system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Smart toggle logic similar to React implementation
  if (colorMode.preference === "system") {
    colorMode.preference = prefersDark ? "light" : "dark";
  } else if (
    (colorMode.preference === "light" && !prefersDark) ||
    (colorMode.preference === "dark" && prefersDark)
  ) {
    colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
  } else {
    colorMode.preference = "system";
  }
};
</script>

<template>
  <Button variant="outline" size="icon" class="size-9" @click="smartToggle">
    <span class="sr-only">Toggle theme</span>
    <!-- Sun icon for light mode -->
    <Icon
      v-if="colorMode.value === 'light'"
      name="ri:sun-line"
      class="size-5 dark:hidden"
      :size="20"
      aria-hidden="true"
    />
    <!-- Moon icon for dark mode -->
    <Icon
      v-else-if="colorMode.value === 'dark'"
      name="ri:moon-clear-line"
      class="hidden size-5 dark:block"
      :size="20"
      aria-hidden="true"
    />
  </Button>
</template>
