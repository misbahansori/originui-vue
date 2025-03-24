<script setup lang="ts">
import { ref, useId } from "vue";

const id = useId();
const selectedValue = ref("1");

const items = [
  { value: "1", label: "Light", image: "/ui-light.png" },
  { value: "2", label: "Dark", image: "/ui-dark.png" },
  { value: "3", label: "System", image: "/ui-system.png" },
];
</script>

<template>
  <fieldset class="space-y-4">
    <legend class="text-foreground text-sm leading-none font-medium">
      Choose a theme
    </legend>
    <RadioGroup class="flex gap-3" v-model="selectedValue">
      <label v-for="item in items" :key="`${id}-${item.value}`">
        <RadioGroupItem
          :id="`${id}-${item.value}`"
          :value="item.value"
          class="peer sr-only after:absolute after:inset-0"
        />
        <img
          :src="item.image"
          :alt="item.label"
          width="88"
          height="70"
          class="border-input peer-focus-visible:ring-ring/50 peer-data-[state=checked]:border-ring peer-data-[state=checked]:bg-accent relative cursor-pointer overflow-hidden rounded-md border shadow-xs transition-[color,box-shadow] outline-none peer-focus-visible:ring-[3px] peer-data-disabled:cursor-not-allowed peer-data-disabled:opacity-50"
        />
        <span
          class="group peer-data-[state=unchecked]:text-muted-foreground/70 mt-2 flex items-center gap-1"
        >
          <Icon
            name="lucide:check"
            size="16"
            class="group-peer-data-[state=unchecked]:hidden"
            aria-hidden="true"
          />
          <Icon
            name="lucide:minus"
            size="16"
            class="group-peer-data-[state=checked]:hidden"
            aria-hidden="true"
          />
          <span class="text-xs font-medium">{{ item.label }}</span>
        </span>
      </label>
    </RadioGroup>
  </fieldset>
</template>
