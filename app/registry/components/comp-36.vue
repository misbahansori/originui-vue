<script setup lang="ts">
// TODO: This component uses React Aria Components (DateField, DateInput)
// We need to find an equivalent Vue library or implement custom functionality
const date = ref(new Date());
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label class="text-foreground text-sm font-medium">Date input</Label>
    <div
      class="border-input bg-background text-foreground focus-within:border-ring focus-within:ring-ring/50 flex h-9 items-center rounded-md border px-3 shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]"
    >
      <input
        v-model="date"
        type="date"
        class="w-full bg-transparent text-sm focus:outline-none"
      />
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      <!-- TODO: This original component used React Aria DateField -->
      Built with native Vue date input
    </p>
  </div>
</template>
