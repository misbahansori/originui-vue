<script setup lang="ts">
import { cn } from "@/lib/utils";
import { provideMiniCalendarContext } from "@/registry/default/ui/mini-calendar";
import type { CalendarDate } from "@internationalized/date";
import { getLocalTimeZone, today } from "@internationalized/date";
import type { HTMLAttributes } from "vue";
import { ref } from "vue";

export interface MiniCalendarProps {
  startDate?: CalendarDate;
  days?: number;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<MiniCalendarProps>(), {
  defaultStartDate: () => today(getLocalTimeZone()),
  days: 5,
});

const selectedDate = defineModel<CalendarDate | undefined>("modelValue");
const startDate = ref<CalendarDate>(
  props.startDate ?? today(getLocalTimeZone()),
);

const days = ref<number>(props.days ?? 5);

const selectDate = (date: CalendarDate) => {
  selectedDate.value = date;
};

const navigate = (direction: "prev" | "next") => {
  const offset = direction === "next" ? days.value : -days.value;
  startDate.value = startDate.value.add({ days: offset });
};

provideMiniCalendarContext({
  selectedDate,
  selectDate,
  startDate,
  navigate,
  days,
});
</script>

<template>
  <div
    :class="
      cn(
        'bg-background flex items-center justify-between gap-2 rounded-lg border p-2',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
