<script setup lang="ts">
import { cn } from "@/lib/utils";
import { useVModel } from "@vueuse/core";
import type { HTMLAttributes } from "vue";
import { computed, provide, ref, watch } from "vue";

export interface MiniCalendarProps {
  modelValue?: Date;
  defaultValue?: Date;
  startDate?: Date;
  defaultStartDate?: Date;
  days?: number;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<MiniCalendarProps>(), {
  defaultStartDate: () => new Date(),
  days: 5,
});

const emit = defineEmits<{
  "update:modelValue": [date: Date | undefined];
  "update:startDate": [date: Date | undefined];
}>();

// Helper function to add days to a date
const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

// Controlled state for selected date
const selectedDate = useVModel(props, "modelValue", emit, {
  passive: true,
  defaultValue: props.defaultValue,
});

// Controlled state for start date
const internalStartDate = ref<Date>(props.defaultStartDate);

watch(
  () => props.startDate,
  (newStartDate) => {
    if (newStartDate) {
      internalStartDate.value = newStartDate;
    }
  },
  { immediate: true },
);

const handleDateSelect = (date: Date) => {
  selectedDate.value = date;
};

const handleNavigate = (direction: "prev" | "next") => {
  const newStartDate = addDays(
    internalStartDate.value,
    direction === "next" ? props.days : -props.days,
  );
  internalStartDate.value = newStartDate;
  emit("update:startDate", newStartDate);
};

// Provide context to child components
provide("mini-calendar", {
  selectedDate: computed(() => selectedDate.value),
  onDateSelect: handleDateSelect,
  startDate: computed(() => internalStartDate.value),
  onNavigate: handleNavigate,
  days: computed(() => props.days),
});
</script>

<template>
  <div
    :class="
      cn(
        'bg-background flex items-center gap-2 rounded-lg border p-2',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
