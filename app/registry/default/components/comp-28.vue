<script setup lang="ts">
import {
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
} from "reka-ui";

const id = useId();
const value = ref(2048);
</script>

<template>
  <div>
    <div class="*:not-first:mt-2">
      <Label :for="id">Number input with plus/minus buttons</Label>
      <NumberFieldRoot
        :id="id"
        :min="0"
        v-model="value"
        class="border-input data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 data-focus-within:has-aria-invalid:border-destructive relative inline-flex h-9 w-full items-center overflow-hidden rounded-md border text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none data-disabled:opacity-50 data-focus-within:ring-[3px]"
      >
        <NumberFieldDecrement
          class="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-md border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Icon name="lucide:minus" :size="16" aria-hidden="true" />
        </NumberFieldDecrement>
        <NumberFieldInput
          v-model.number="value"
          class="bg-background text-foreground w-full grow px-3 py-2 text-center tabular-nums"
        />
        <NumberFieldIncrement
          class="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-md border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Icon name="lucide:plus" :size="16" aria-hidden="true" />
        </NumberFieldIncrement>
      </NumberFieldRoot>
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Built with reka-ui
      <a
        class="hover:text-foreground underline"
        href="https://reka-ui.com/docs/components/number-field"
        target="_blank"
        rel="noopener noreferrer"
      >
        NumberField
      </a>
    </p>
  </div>
</template>
