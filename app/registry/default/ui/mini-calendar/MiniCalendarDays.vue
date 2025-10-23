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

const days = computed(() => {
  const days: CalendarDate[] = [];
  for (let i = 0; i < context.days.value; i++) {
    days.push(context.startDate.value.add({ days: i }));
  }
  return days;
});
</script>

<template>
  <div :class="cn('flex items-center gap-1', props.class)">
    <slot v-for="date in days" :key="date.toString()" :date="date" />
  </div>
</template>
