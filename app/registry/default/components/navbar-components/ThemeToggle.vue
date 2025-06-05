<script setup lang="ts">
import { LucideMoon, LucideSun } from "lucide-vue-next";
import { ref } from "vue";

import { Toggle } from "@/registry/default/ui/toggle";

const theme = ref<string>("light");

const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
};
</script>

<template>
  <div>
    <Toggle
      variant="outline"
      size="xs"
      class="group data-[state=on]:hover:bg-muted text-muted-foreground data-[state=on]:text-muted-foreground data-[state=on]:hover:text-foreground size-8 rounded-full border-none shadow-none data-[state=on]:bg-transparent"
      :pressed="theme === 'dark'"
      @pressed-change="toggleTheme"
      :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
    >
      <!-- Note: After dark mode implementation, rely on dark: prefix rather than group-data-[state=on]: -->
      <LucideMoon
        :size="16"
        class="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
        aria-hidden="true"
      />
      <LucideSun
        :size="16"
        class="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
        aria-hidden="true"
      />
    </Toggle>
  </div>
</template>
