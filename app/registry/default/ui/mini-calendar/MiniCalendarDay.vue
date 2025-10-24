<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Button } from "@/registry/default/ui/button";
import { injectMiniCalendarContext } from "@/registry/default/ui/mini-calendar";
import type { CalendarDate } from "@internationalized/date";
import { getLocalTimeZone, isSameDay, isToday } from "@internationalized/date";
import { useDateFormat } from "@vueuse/core";
import type { HTMLAttributes } from "vue";
import { computed } from "vue";

export interface MiniCalendarDayProps {
  date: CalendarDate;
  class?: HTMLAttributes["class"];
}

const props = defineProps<MiniCalendarDayProps>();

const context = injectMiniCalendarContext();

const nativeDate = computed(() => props.date.toDate(getLocalTimeZone()));

const month = useDateFormat(nativeDate, "MMM");
const day = useDateFormat(nativeDate, "DD");

const isSelected = computed(() =>
  context.selectedDate.value
    ? isSameDay(props.date, context.selectedDate.value)
    : false,
);
const isTodayDate = isToday(props.date, getLocalTimeZone());
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
    @click="context.selectDate(props.date)"
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
