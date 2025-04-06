<script setup lang="ts">
import { LucideMoon, LucideSun } from "lucide-vue-next";
const colorMode = useColorMode();

const toggle = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
};
</script>

<template>
  <Button variant="ghost" size="icon" class="size-9" @click="toggle">
    <LucideSun
      v-if="colorMode.value === 'light'"
      class="text-muted-foreground hover:text-foreground/80 size-5 dark:hidden"
      :size="20"
      aria-hidden="true"
    />

    <LucideMoon
      v-else-if="colorMode.value === 'dark'"
      class="text-muted-foreground hover:text-foreground/80 hidden size-5 dark:block"
      :size="20"
      aria-hidden="true"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
