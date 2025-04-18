<script setup lang="ts">
import { RangeCalendar } from "@/registry/default/ui/range-calendar";
import {
  type DateValue,
  getLocalTimeZone,
  isWeekend,
  today,
} from "@internationalized/date";
import type { DateRange } from "reka-ui";
import type { Ref } from "vue";
import { ref } from "vue";

const start = today(getLocalTimeZone());
const end = start.add({ days: 7 });

const value = ref({
  start,
  end,
}) as Ref<DateRange>;

const disabledRanges = [
  [start, start],
  [start.add({ days: 14 }), start.add({ days: 14 })],
  [start.add({ days: 23 }), start.add({ days: 23 })],
] as const;

const isDateUnavailable = (date: DateValue) =>
  isWeekend(date, "en") ||
  disabledRanges.some(
    (interval) =>
      date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0,
  );
</script>

<template>
  <div>
    <RangeCalendar
      v-model="value"
      :isDateUnavailable="isDateUnavailable"
      :weekday-format="'short'"
      :minValue="today(getLocalTimeZone())"
      class="rounded-md border"
    />
    <p class="text-muted-foreground mt-4 text-center text-xs">
      Disabled dates -
      <a
        class="hover:text-foreground underline"
        href="https://reka-ui.com/docs/components/calendar#calendar"
        target="_blank"
        rel="noopener nofollow"
      >
        Reka UI
      </a>
    </p>
  </div>
</template>
