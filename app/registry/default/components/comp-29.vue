<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { NumberField, NumberFieldInput } from "@/registry/default/ui/number-field";
import { NumberFieldDecrement, NumberFieldIncrement } from "reka-ui";
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
      >
        <div class="relative">
          <NumberFieldInput
            class="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
          />
          <div
            class="absolute inset-y-0 right-0 flex h-[calc(100%)] flex-col border-l border-input gap-0"
          >
            <NumberFieldIncrement
              class="w-5 h-1/2 flex items-center justify-center text-muted-foreground/80 hover:text-foreground"
            >
              <LucideChevronUp aria-hidden="true" class="size-3 shrink-0" />
            </NumberFieldIncrement>
            <NumberFieldDecrement
              class="w-5 h-1/2 border-t border-input flex items-center justify-center text-muted-foreground/80 hover:text-foreground"
            >
              <LucideChevronDown aria-hidden="true" class="size-3 shrink-0" />
            </NumberFieldDecrement>
          </div>
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
