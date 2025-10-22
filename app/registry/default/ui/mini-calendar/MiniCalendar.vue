<script setup lang="ts">
import { cn } from "@/lib/utils";
import { provideMiniCalendarContext } from "@/registry/default/ui/mini-calendar";
import type { CalendarDate } from "@internationalized/date";
import { getLocalTimeZone, today } from "@internationalized/date";
import type { HTMLAttributes, Ref } from "vue";
import { computed, ref, watch } from "vue";

export interface MiniCalendarProps {
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
  "update:startDate": [date: CalendarDate | undefined];
}>();

// Controlled state for selected date using defineModel
const selectedDate = defineModel<CalendarDate>();

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
provideMiniCalendarContext({
  selectedDate: selectedDate as Readonly<Ref<CalendarDate | undefined>>,
  onDateSelect: handleDateSelect,
  startDate: internalStartDate as Readonly<Ref<CalendarDate>>,
  onNavigate: handleNavigate,
  days: computed(() => props.days),
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
