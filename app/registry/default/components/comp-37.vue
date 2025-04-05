<script setup lang="ts">
const id = useId();
const time = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id" class="text-foreground text-sm font-medium">
      Time input
    </Label>
    <div
      class="border-input bg-background text-foreground focus-within:border-ring focus-within:ring-ring/50 flex h-9 items-center rounded-md border px-3 shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]"
    >
      <input
        :id="id"
        v-model="time"
        type="time"
        class="w-full bg-transparent text-sm focus:outline-none"
      />
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Built with native time input
    </p>
  </div>
</template>
