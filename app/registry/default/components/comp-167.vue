<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { ref, useId } from "vue";

const id = useId();
const selectedValue = ref("3");

const items = [
  { value: "1", label: "Angry", icon: "😠" },
  { value: "2", label: "Sad", icon: "🙁" },
  { value: "3", label: "Neutral", icon: "😐" },
  { value: "4", label: "Happy", icon: "🙂" },
  { value: "5", label: "Laughing", icon: "😀" },
];
</script>

<template>
  <fieldset class="space-y-4">
    <legend class="text-foreground text-sm leading-none font-medium">How did it go?</legend>
    <RadioGroup class="flex gap-1.5" v-model="selectedValue">
      <label
        v-for="item in items"
        :key="`${id}-${item.value}`"
        class="border-input has-data-[state=checked]:border-primary/50 focus-within:border-ring focus-within:ring-ring/50 relative flex size-9 cursor-pointer flex-col items-center justify-center rounded-full border text-center text-xl shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"
      >
        <RadioGroupItem
          :id="`${id}-${item.value}`"
          :value="item.value"
          class="sr-only after:absolute after:inset-0"
        />
        {{ item.icon }}
      </label>
    </RadioGroup>
  </fieldset>
</template>
