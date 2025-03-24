<script setup lang="ts">
import { ref, useId } from "vue";

const id = useId();
const selectedValue = ref("1");

const items = [
  { value: "1", label: "2 CPU" },
  { value: "2", label: "4 CPU" },
  { value: "3", label: "6 CPU" },
  { value: "4", label: "8 CPU" },
  { value: "5", label: "12 CPU" },
  { value: "6", label: "16 CPU", disabled: true },
];
</script>

<template>
  <fieldset class="space-y-4">
    <legend class="text-foreground text-sm leading-none font-medium">
      CPU Cores
    </legend>
    <RadioGroup class="grid grid-cols-3 gap-2" v-model="selectedValue">
      <label
        v-for="item in items"
        :key="`${id}-${item.value}`"
        class="border-input has-data-[state=checked]:border-ring focus-within:border-ring focus-within:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"
        :data-disabled="item.disabled"
      >
        <RadioGroupItem
          :id="`${id}-${item.value}`"
          :value="item.value"
          class="sr-only after:absolute after:inset-0"
          :disabled="item.disabled"
        />
        <p class="text-foreground text-sm leading-none font-medium">
          {{ item.label }}
        </p>
      </label>
    </RadioGroup>
  </fieldset>
</template>
