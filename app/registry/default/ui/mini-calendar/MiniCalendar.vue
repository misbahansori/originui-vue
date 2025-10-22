<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { CalendarDate } from "@internationalized/date";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useVModel } from "@vueuse/core";
import type { HTMLAttributes } from "vue";
import { computed, provide, ref, watch } from "vue";

export interface MiniCalendarProps {
  modelValue?: CalendarDate;
  defaultValue?: CalendarDate;
  startDate?: CalendarDate;
  defaultStartDate?: CalendarDate;
  days?: number;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<MiniCalendarProps>(), {
  defaultStartDate: () => today(getLocalTimeZone()),
  days: 5,
});

const emit = defineEmits<{
  "update:modelValue": [date: CalendarDate | undefined];
  "update:startDate": [date: CalendarDate | undefined];
}>();

// Controlled state for selected date
const selectedDate = useVModel(props, "modelValue", emit, {
  passive: true,
  defaultValue: props.defaultValue,
});

// Controlled state for start date
const internalStartDate = ref<CalendarDate>(props.defaultStartDate);

watch(
  () => props.startDate,
  (newStartDate) => {
    if (newStartDate) {
      internalStartDate.value = newStartDate;
    }
  },
  { immediate: true },
);

const handleDateSelect = (date: CalendarDate) => {
  selectedDate.value = date;
};

const handleNavigate = (direction: "prev" | "next") => {
  const offset = direction === "next" ? props.days : -props.days;
  const newStartDate = internalStartDate.value.add({ days: offset });
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
