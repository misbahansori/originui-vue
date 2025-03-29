<script setup lang="ts">
import {
  type DateValue,
  getLocalTimeZone,
  isWeekend,
  today,
} from "@internationalized/date";

const now = ref(today(getLocalTimeZone())) as Ref<DateValue>;

const disabledRanges = [
  [now.value, now.value],
  [now.value.add({ days: 14 }), now.value.add({ days: 14 })],
  [now.value.add({ days: 23 }), now.value.add({ days: 23 })],
] as const;

const isDateUnavailable = (date: DateValue) =>
  isWeekend(date, "en") ||
  disabledRanges.some(
    (interval) =>
      date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0,
  );
</script>

<template>
  <Calendar
    v-model="now"
    :isDateUnavailable="isDateUnavailable"
    :weekday-format="'short'"
    :minValue="today(getLocalTimeZone())"
    class="rounded-md border"
  />
</template>
