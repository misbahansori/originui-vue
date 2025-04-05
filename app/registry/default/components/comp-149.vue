<script setup lang="ts">
import { Checkbox } from "@/registry/default/ui/checkbox";
import { ref, useId } from "vue";

const id = useId();

interface DayItem {
  value: string;
  label: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}

const items: DayItem[] = [
  { value: "1", label: "Monday", defaultChecked: true },
  { value: "2", label: "Tuesday", defaultChecked: true },
  { value: "3", label: "Wednesday" },
  { value: "4", label: "Thursday", defaultChecked: true },
  { value: "5", label: "Friday", defaultChecked: true },
  { value: "6", label: "Saturday" },
  { value: "7", label: "Sunday", disabled: true },
];

const checkedDays = ref<Record<string, boolean>>({
  "1": true,
  "2": true,
  "4": true,
  "5": true,
});
</script>

<template>
  <fieldset class="space-y-4">
    <legend class="text-foreground text-sm leading-none font-medium">
      Days of the week
    </legend>
    <div class="flex gap-1.5">
      <label
        v-for="item in items"
        :key="`${id}-${item.value}`"
        class="border-input has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary has-data-[state=checked]:text-primary-foreground has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex size-9 cursor-pointer flex-col items-center justify-center gap-3 rounded-full border text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"
        :data-disabled="item.disabled"
        :data-state="checkedDays[item.value] ? 'checked' : undefined"
      >
        <Checkbox
          :id="`${id}-${item.value}`"
          :value="item.value"
          class="sr-only after:absolute after:inset-0"
          v-model="checkedDays[item.value]"
          :disabled="item.disabled"
        />
        <span aria-hidden="true" class="text-sm font-medium">
          {{ item.label[0] }}
        </span>
        <span class="sr-only">{{ item.label }}</span>
      </label>
    </div>
  </fieldset>
</template>
