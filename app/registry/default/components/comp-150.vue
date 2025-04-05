<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { LucideMoon, LucideSun } from "lucide-vue-next";
import { useId } from "vue";

const id = useId();
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
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
        :checked="colorMode === 'dark'"
        @change="toggleColorMode"
      />
      <label
        class="group border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground peer-focus-visible:border-ring peer-focus-visible:ring-ring/50 relative inline-flex size-9 items-center justify-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none peer-focus-visible:ring-[3px]"
        :for="id"
        :aria-label="`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`"
      >
        <LucideMoon
          :size="16"
          class="shrink-0 scale-0 opacity-0 transition-all"
          :class="{ 'scale-100 opacity-100': colorMode === 'dark' }"
          aria-hidden="true"
        />
        <LucideSun
          :size="16"
          class="absolute shrink-0 transition-all"
          :class="{
            'scale-100 opacity-100': colorMode === 'light',
            'scale-0 opacity-0': colorMode === 'dark',
          }"
          aria-hidden="true"
        />
      </label>
    </div>
  </div>
</template>
