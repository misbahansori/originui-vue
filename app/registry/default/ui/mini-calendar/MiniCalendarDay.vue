<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Button } from "@/registry/default/ui/button";
import { injectMiniCalendarContext } from "@/registry/default/ui/mini-calendar";
import type { CalendarDate } from "@internationalized/date";
import { getLocalTimeZone, isSameDay, isToday } from "@internationalized/date";
import type { HTMLAttributes } from "vue";
import { computed } from "vue";

export interface MiniCalendarDayProps {
  date: CalendarDate;
  class?: HTMLAttributes["class"];
}

const props = defineProps<MiniCalendarDayProps>();

const context = injectMiniCalendarContext();

// Helper function to format date
const formatDate = (date: CalendarDate) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.month - 1];
  const day = date.day.toString();

  return { month, day };
};

const { month, day } = formatDate(props.date);
const isSelected = computed(() =>
  context.selectedDate.value
    ? isSameDay(props.date, context.selectedDate.value)
    : false,
);
const isTodayDate = isToday(props.date, getLocalTimeZone());

const handleClick = () => {
  context.onDateSelect(props.date);
};
</script>

<template>
  <Button
    :class="
      cn(
        'h-auto min-w-[3rem] flex-col gap-0 p-2 text-xs',
        isTodayDate && !isSelected && 'bg-accent',
        props.class,
      )
    "
    @click="handleClick"
    size="sm"
    type="button"
    :variant="isSelected ? 'default' : 'ghost'"
  >
    <span
      :class="
        cn(
          'text-muted-foreground text-[10px] font-medium',
          isSelected && 'text-primary-foreground/70',
        )
      "
    >
      {{ month }}
    </span>
    <span class="text-sm font-semibold">{{ day }}</span>
  </Button>
</template>
