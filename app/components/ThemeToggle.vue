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
      :size="16"
      class="text-muted-foreground hover:text-foreground/80 size-4 dark:hidden"
      aria-hidden="true"
    />

    <LucideMoon
      :size="16"
      class="text-muted-foreground hover:text-foreground/80 hidden size-4 dark:block"
      aria-hidden="true"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
