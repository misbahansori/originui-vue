<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { ref, useId } from "vue";

const id = useId();
const selectedValue = ref("0");
const values = ["0", "1", "2", "3", "4", "5"];
</script>

<template>
  <div>
    <fieldset class="space-y-4">
      <legend class="text-foreground text-sm leading-none font-medium">
        How likely are you to recommend us?
      </legend>
      <RadioGroup
        class="flex gap-0 -space-x-px rounded-md shadow-xs"
        v-model="selectedValue"
      >
        <label
          v-for="value in values"
          :key="`${id}-${value}`"
          class="border-input has-data-[state=checked]:border-primary/50 focus-within:border-ring focus-within:ring-ring/50 relative flex size-9 flex-1 cursor-pointer flex-col items-center justify-center gap-3 border text-center text-sm font-medium transition-[color,box-shadow] outline-none first:rounded-s-md last:rounded-e-md focus-within:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50 has-data-[state=checked]:z-10"
        >
          <RadioGroupItem
            :id="`${id}-${value}`"
            :value="value"
            class="sr-only after:absolute after:inset-0"
          />
          {{ value }}
        </label>
      </RadioGroup>
    </fieldset>
    <div class="mt-1 flex justify-between text-xs font-medium">
      <p>
        <span class="text-base">😡</span>
        Not likely
      </p>
      <p>
        Very Likely
        <span class="text-base">😍</span>
      </p>
    </div>
  </div>
</template>
