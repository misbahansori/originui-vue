<script setup lang="ts">
import {
  DateRangePicker,
  DateRangePickerCalendar,
  DateRangePickerField,
  DateRangePickerInput,
  DateRangePickerTrigger,
} from "@/registry/default/ui/date-range-picker";
import { Label } from "@/registry/default/ui/label";
import {
  getLocalTimeZone,
  today,
  type DateValue,
} from "@internationalized/date";
import { useId } from "vue";

const startId = useId();
const endId = useId();

const now = today(getLocalTimeZone());

const disabledRanges = [
  [now, now.add({ days: 5 })],
  [now.add({ days: 14 }), now.add({ days: 16 })],
  [now.add({ days: 23 }), now.add({ days: 24 })],
];

const isDateUnavailable = (date: DateValue) =>
  disabledRanges.some((interval) => {
    if (!interval[0] || !interval[1]) return false;

    return date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0;
  });

const validate = (value: { start: DateValue; end: DateValue } | null) =>
  disabledRanges.some((interval) => {
    if (!interval[0] || !interval[1]) return false;

    return (
      value &&
      value.end.compare(interval[0]) >= 0 &&
      value.start.compare(interval[1]) <= 0
    );
  })
    ? "Selected date range may not include unavailable dates."
    : null;
</script>
<template>
  <div class="*:not-first:mt-2">
    <Label :for="startId" class="text-foreground text-sm font-medium">
      Date range picker (unavailable dates)
    </Label>
    <DateRangePicker
      :id="startId"
      :end-id="endId"
      :isDateUnavailable="isDateUnavailable"
      :validate="validate"
    >
      <DateRangePickerField v-slot="{ segments }">
        <DateRangePickerInput
          v-for="item in segments.start"
          type="start"
          :key="item.part"
          :part="item.part"
        >
          {{ item.value }}
        </DateRangePickerInput>
        <span aria-hidden="true" class="text-muted-foreground/70 px-2">-</span>
        <DateRangePickerInput
          v-for="item in segments.end"
          type="end"
          :key="item.part"
          :part="item.part"
        >
          {{ item.value }}
        </DateRangePickerInput>
        <DateRangePickerTrigger />
      </DateRangePickerField>

      <DateRangePickerCalendar />
    </DateRangePicker>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Built with native date inputs
    </p>
  </div>
</template>
