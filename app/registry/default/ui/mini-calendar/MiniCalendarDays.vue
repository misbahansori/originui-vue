<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { DateValue } from "@internationalized/date";
import type { HTMLAttributes } from "vue";
import { computed, inject } from "vue";

export interface MiniCalendarDaysProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<MiniCalendarDaysProps>();

const context = inject<{
  startDate: ReturnType<typeof computed<DateValue>>;
  days: ReturnType<typeof computed<number>>;
}>("mini-calendar");

if (!context) {
  throw new Error(
    "MiniCalendarDays must be used within MiniCalendar component",
  );
}

// Helper function to get array of consecutive dates
const getDays = (startDate: DateValue, count: number): DateValue[] => {
  const days: DateValue[] = [];
  for (let i = 0; i < count; i++) {
    days.push(startDate.add({ days: i }));
  }
  return days;
};

const days = computed(() =>
  getDays(context.startDate.value, context.days.value),
);
</script>

<template>
  <div :class="cn('flex items-center gap-1', props.class)">
    <slot v-for="date in days" :key="date.toString()" :date="date" />
  </div>
</template>
