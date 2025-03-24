<script setup lang="ts">
// TODO: This component uses React Aria Components (NumberField, Group, etc.)
// We need to find an equivalent Vue library or implement custom functionality
const value = ref(2048);

const increment = () => {
  value.value++;
};

const decrement = () => {
  if (value.value > 0) {
    value.value--;
  }
};
</script>

<template>
  <div>
    <div class="*:not-first:mt-2">
      <Label class="text-foreground text-sm font-medium">
        Number input with plus/minus buttons
      </Label>
      <div
        class="border-input data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 data-focus-within:has-aria-invalid:border-destructive relative inline-flex h-9 w-full items-center overflow-hidden rounded-md border text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none data-disabled:opacity-50 data-focus-within:ring-[3px]"
      >
        <button
          class="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-md border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          @click="decrement"
          :disabled="value <= 0"
        >
          <Icon name="lucide:minus" :size="16" aria-hidden="true" />
        </button>
        <input
          v-model.number="value"
          class="bg-background text-foreground w-full grow px-3 py-2 text-center tabular-nums"
        />
        <button
          class="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-md border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          @click="increment"
        >
          <Icon name="lucide:plus" :size="16" aria-hidden="true" />
        </button>
      </div>
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      <!-- TODO: This original component used React Aria -->
      Built with native Vue inputs
    </p>
  </div>
</template>
