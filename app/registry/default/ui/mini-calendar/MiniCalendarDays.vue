<script setup lang="ts">
import { cn } from "@/lib/utils";
import { injectMiniCalendarContext } from "@/registry/default/ui/mini-calendar";
import type { CalendarDate } from "@internationalized/date";
import type { HTMLAttributes } from "vue";
import { computed } from "vue";

export interface MiniCalendarDaysProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<MiniCalendarDaysProps>();

const context = injectMiniCalendarContext();

// Helper function to get array of consecutive dates
const getDays = (startDate: CalendarDate, count: number): CalendarDate[] => {
  const days: CalendarDate[] = [];
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
