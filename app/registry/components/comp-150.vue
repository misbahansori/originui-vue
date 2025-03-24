<script setup lang="ts">
import { ref, useId } from "vue";

const id = useId();
const theme = ref("light");

const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
};
</script>

<template>
  <div class="space-y-4">
    <legend class="text-foreground text-sm leading-none font-medium">
      Dark mode toggle checkbox
    </legend>
    <div class="flex flex-col justify-center">
      <input
        type="checkbox"
        :name="id"
        :id="id"
        class="peer sr-only"
        :checked="theme === 'dark'"
        @change="toggleTheme"
      />
      <label
        class="group border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground peer-focus-visible:border-ring peer-focus-visible:ring-ring/50 relative inline-flex size-9 items-center justify-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none peer-focus-visible:ring-[3px]"
        :for="id"
        :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
      >
        <!-- Note: After dark mode implementation, rely on dark: prefix rather than group-peer-checked: -->
        <Icon
          name="lucide:moon"
          size="16"
          class="shrink-0 scale-0 opacity-0 transition-all"
          :class="{ 'scale-100 opacity-100': theme === 'dark' }"
          aria-hidden="true"
        />
        <Icon
          name="lucide:sun"
          size="16"
          class="absolute shrink-0 transition-all"
          :class="{
            'scale-100 opacity-100': theme === 'light',
            'scale-0 opacity-0': theme === 'dark',
          }"
          aria-hidden="true"
        />
      </label>
    </div>
  </div>
</template>
