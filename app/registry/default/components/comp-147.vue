<script setup lang="ts">
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { Brush, Eraser, Scissors, SwatchBook } from "lucide-vue-next";
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
  { value: "1", label: "Palette", icon: SwatchBook },
  { value: "2", label: "Brush", icon: Brush },
  { value: "3", label: "Eraser", icon: Eraser },
  { value: "4", label: "Cut", icon: Scissors },
];
</script>

<template>
  <div class="grid grid-cols-2 gap-3">
    <div
      v-for="item in items"
      :key="`${id}-${item.value}`"
      class="border-input has-data-[state=checked]:border-primary/50 relative flex cursor-pointer flex-col gap-4 rounded-md border p-4 shadow-xs outline-none"
    >
      <div class="flex justify-between gap-2">
        <Checkbox
          :id="`${id}-${item.value}`"
          class="order-1 after:absolute after:inset-0"
          v-model="checkedStates[item.value]"
        />
        <component
          :is="item.icon"
          class="opacity-60"
          :size="16"
          aria-hidden="true"
        />
      </div>
      <Label :for="`${id}-${item.value}`">{{ item.label }}</Label>
    </div>
  </div>
</template>
