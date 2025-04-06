<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { LucideChevronDown, LucideChevronUp } from "lucide-vue-next";
import {
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
} from "reka-ui";
import { ref, useId } from "vue";

const id = useId();
const value = ref(99);
</script>

<template>
  <div>
    <div class="*:not-first:mt-2">
      <Label :for="id">Number input with chevrons</Label>
      <NumberFieldRoot
        :id="id"
        :min="0"
        v-model="value"
        :formatOptions="{
          style: 'currency',
          currency: 'USD',
          currencySign: 'accounting',
        }"
        class="border-input data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 data-focus-within:has-aria-invalid:border-destructive relative inline-flex h-9 w-full items-center overflow-hidden rounded-md border text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none data-disabled:opacity-50 data-focus-within:ring-[3px]"
      >
        <NumberFieldInput
          v-model.number="value"
          class="bg-background text-foreground flex-1 px-3 py-2 tabular-nums"
        />
        <div class="flex h-[calc(100%+2px)] flex-col">
          <NumberFieldIncrement
            class="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px flex h-1/2 w-6 flex-1 items-center justify-center border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            <LucideChevronUp :size="12" aria-hidden="true" />
          </NumberFieldIncrement>
          <NumberFieldDecrement
            class="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            <LucideChevronDown :size="12" aria-hidden="true" />
          </NumberFieldDecrement>
        </div>
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
