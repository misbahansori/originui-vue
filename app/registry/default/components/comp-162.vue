<script setup lang="ts">
const id = useId();
const selectedValue = ref("1");

const items = [
  { value: "1", label: "Palette", icon: "lucide:swatch-book" },
  { value: "2", label: "Brush", icon: "lucide:brush" },
  { value: "3", label: "Eraser", icon: "lucide:eraser" },
  { value: "4", label: "Cut", icon: "lucide:scissors" },
];
</script>

<template>
  <RadioGroup class="grid grid-cols-2 gap-2" v-model="selectedValue">
    <div
      v-for="item in items"
      :key="`${id}-${item.value}`"
      class="border-input has-data-[state=checked]:border-ring relative flex flex-col gap-4 rounded-md border p-4 shadow-xs outline-none"
    >
      <div class="flex justify-between gap-2">
        <RadioGroupItem
          :id="`${id}-${item.value}`"
          :value="item.value"
          class="order-1 after:absolute after:inset-0"
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
  </RadioGroup>
</template>
