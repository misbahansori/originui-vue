<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import {
  LucideBrush,
  LucideEraser,
  LucideScissors,
  LucideSwatchBook,
} from "lucide-vue-next";
import { ref, useId } from "vue";

const id = useId();
const selectedValue = ref("1");

const items = [
  { value: "1", label: "Palette", icon: LucideSwatchBook },
  { value: "2", label: "Brush", icon: LucideBrush },
  { value: "3", label: "Eraser", icon: LucideEraser },
  { value: "4", label: "Cut", icon: LucideScissors },
];
</script>

<template>
  <RadioGroup class="grid grid-cols-2 gap-2" v-model="selectedValue">
    <div
      v-for="item in items"
      :key="`${id}-${item.value}`"
      class="border-input has-data-[state=checked]:border-primary/50 relative flex flex-col gap-4 rounded-md border p-4 shadow-xs outline-none"
    >
      <div class="flex justify-between gap-2">
        <RadioGroupItem
          :id="`${id}-${item.value}`"
          :value="item.value"
          class="order-1 after:absolute after:inset-0"
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
  </RadioGroup>
</template>
