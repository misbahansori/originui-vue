<script setup lang="ts">
import { ref } from "vue";

const theme = ref("light");

function toggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
}
</script>

<template>
  <div>
    <Toggle
      variant="outline"
      class="group data-[state=on]:hover:bg-muted size-9 data-[state=on]:bg-transparent"
      :pressed="theme === 'dark'"
      @update:pressed="toggleTheme"
      :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
    >
      <!-- Note: After dark mode implementation, rely on dark: prefix rather than group-data-[state=on]: -->
      <Icon
        name="lucide:moon"
        size="16"
        class="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
        aria-hidden="true"
      />
      <Icon
        name="lucide:sun"
        size="16"
        class="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
        aria-hidden="true"
      />
    </Toggle>
  </div>
</template>
