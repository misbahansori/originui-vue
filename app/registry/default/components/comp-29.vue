<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/registry/default/ui/number-field";
import { LucideChevronDown, LucideChevronUp } from "lucide-vue-next";
import { ref } from "vue";

const value = ref(99);
</script>

<template>
  <div>
    <div class="*:not-first:mt-2">
      <Label>Number input with chevrons</Label>
      <NumberField
        :min="0"
        v-model="value"
        :formatOptions="{
          style: 'currency',
          currency: 'USD',
          currencySign: 'accounting',
        }"
        class="relative"
      >
        <NumberFieldInput
          class="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
        />
        <div class="flex h-[calc(100%+2px)] flex-col absolute right-0 inset-y-0">
          <NumberFieldIncrement class="m-0 -me-px h-1/2 w-6 flex-1 rounded-none p-0">
            <LucideChevronUp :size="12" aria-hidden="true" />
          </NumberFieldIncrement>
          <NumberFieldDecrement class="m-0 -me-px -mt-px h-1/2 w-6 flex-1 rounded-none p-0">
            <LucideChevronDown :size="12" aria-hidden="true" />
          </NumberFieldDecrement>
        </div>
      </NumberField>
    </div>
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
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
