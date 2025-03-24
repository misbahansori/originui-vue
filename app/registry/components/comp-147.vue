<script setup lang="ts">
import { ref, useId } from "vue";

type CheckedStates = Record<string, boolean>;

const id = useId();
const checkedStates = ref<CheckedStates>({
  "1": true,
  "2": false,
  "3": false,
  "4": false,
});

const items = [
  { value: "1", label: "Palette", icon: "lucide:swatch-book" },
  { value: "2", label: "Brush", icon: "lucide:brush" },
  { value: "3", label: "Eraser", icon: "lucide:eraser" },
  { value: "4", label: "Cut", icon: "lucide:scissors" },
];
</script>

<template>
  <div class="grid grid-cols-2 gap-3">
    <div
      v-for="item in items"
      :key="`${id}-${item.value}`"
      class="border-input has-data-[state=checked]:border-ring relative flex cursor-pointer flex-col gap-4 rounded-md border p-4 shadow-xs outline-none"
    >
      <div class="flex justify-between gap-2">
        <Checkbox
          :id="`${id}-${item.value}`"
          class="order-1 after:absolute after:inset-0"
          v-model="checkedStates[item.value]"
        />
        <Icon
          :name="item.icon"
          class="opacity-60"
          size="16"
          aria-hidden="true"
        />
      </div>
      <Label :for="`${id}-${item.value}`">{{ item.label }}</Label>
    </div>
  </div>
</template>
