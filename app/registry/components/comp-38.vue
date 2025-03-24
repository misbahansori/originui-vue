<script setup lang="ts">
// TODO: This component uses React Aria Components (TimeField, DateInput)
// We need to find an equivalent Vue library or implement custom functionality
const time = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label class="text-foreground text-sm font-medium">
      Time input with start icon
    </Label>
    <div class="relative">
      <div
        class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 z-10 flex items-center justify-center ps-3"
      >
        <Icon name="lucide:clock" :size="16" aria-hidden="true" />
      </div>
      <div
        class="border-input bg-background text-foreground focus-within:border-ring focus-within:ring-ring/50 flex h-9 items-center rounded-md border px-3 shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]"
      >
        <input
          v-model="time"
          type="time"
          class="w-full bg-transparent ps-6 text-sm focus:outline-none"
        />
      </div>
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      <!-- TODO: This original component used React Aria TimeField -->
      Built with native Vue time input
    </p>
  </div>
</template>
