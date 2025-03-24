<script setup lang="ts">
// TODO: This component uses React Aria Components (NumberField, Group, etc.)
// We need to find an equivalent Vue library or implement custom functionality
const value = ref(99);

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    currencySign: "accounting",
  }).format(val);
};

const increment = () => {
  value.value++;
};

const decrement = () => {
  value.value--;
};
</script>

<template>
  <div>
    <div class="*:not-first:mt-2">
      <Label class="text-foreground text-sm font-medium">
        Number input with chevrons
      </Label>
      <div
        class="border-input data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 data-focus-within:has-aria-invalid:border-destructive relative inline-flex h-9 w-full items-center overflow-hidden rounded-md border text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none data-disabled:opacity-50 data-focus-within:ring-[3px]"
      >
        <input
          v-model.number="value"
          class="bg-background text-foreground flex-1 px-3 py-2 tabular-nums"
        />
        <div class="flex h-[calc(100%+2px)] flex-col">
          <button
            @click="increment"
            class="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px flex h-1/2 w-6 flex-1 items-center justify-center border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Icon name="lucide:chevron-up" :size="12" aria-hidden="true" />
          </button>
          <button
            @click="decrement"
            class="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Icon name="lucide:chevron-down" :size="12" aria-hidden="true" />
          </button>
        </div>
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
