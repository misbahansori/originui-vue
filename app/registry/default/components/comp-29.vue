<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { LucideChevronDown, LucideChevronUp } from "lucide-vue-next";
import { ref, useId } from "vue";

const id = useId();
const value = ref(99);
</script>

<template>
  <div>
    <div class="*:not-first:mt-2">
      <Label :for="id">Number input with chevrons</Label>
      <NumberField
        :id="id"
        :min="0"
        v-model="value"
        :formatOptions="{
          style: 'currency',
          currency: 'USD',
          currencySign: 'accounting',
        }"
      >
        <NumberFieldInput />
        <div class="flex h-[calc(100%+2px)] flex-col">
          <NumberFieldIncrement
            class="m-0 -me-px h-1/2 w-6 flex-1 rounded-none"
          >
            <LucideChevronUp :size="12" aria-hidden="true" />
          </NumberFieldIncrement>
          <NumberFieldDecrement
            class="m-0 -me-px -mt-px h-1/2 w-6 flex-1 rounded-none"
          >
            <LucideChevronDown :size="12" aria-hidden="true" />
          </NumberFieldDecrement>
        </div>
      </NumberField>
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
