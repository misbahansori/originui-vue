<script setup lang="ts">
const colorMode = useColorMode();

const toggle = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
};
</script>

<template>
  <Button variant="ghost" size="icon" class="size-9" @click="toggle">
    <!-- Sun icon for light mode -->
    <Icon
      v-if="colorMode.value === 'light'"
      name="ri:sun-line"
      class="text-muted-foreground hover:text-foreground/80 size-5 dark:hidden"
      :size="20"
      aria-hidden="true"
    />
    <!-- Moon icon for dark mode -->
    <Icon
      v-else-if="colorMode.value === 'dark'"
      name="ri:moon-clear-line"
      class="text-muted-foreground hover:text-foreground/80 hidden size-5 dark:block"
      :size="20"
      aria-hidden="true"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
