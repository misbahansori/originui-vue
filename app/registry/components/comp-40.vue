<script setup lang="ts">
const id = useId();
const dateTime = ref(new Date());
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id" class="text-foreground text-sm font-medium">
      Date and time input
    </Label>
    <div class="relative">
      <div
        class="border-input bg-background text-foreground focus-within:border-ring focus-within:ring-ring/50 flex h-9 items-center rounded-md border px-3 shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]"
      >
        <input
          :id="id"
          v-model="dateTime"
          type="datetime-local"
          class="w-full bg-transparent pe-6 text-sm focus:outline-none"
        />
      </div>
      <div
        class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 z-10 flex items-center justify-center pe-3"
      >
        <Icon name="lucide:clock" :size="16" aria-hidden="true" />
      </div>
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Built with native datetime input
    </p>
  </div>
</template>
