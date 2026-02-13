<script setup lang="ts">
import {
  DateRangePicker,
  DateRangePickerCalendar,
  DateRangePickerField,
  DateRangePickerInput,
  DateRangePickerTrigger,
} from "@/registry/default/ui/date-range-picker";
import { Label } from "@/registry/default/ui/label";
import { useId } from "vue";

const startId = useId();
const endId = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="startId" class="text-foreground text-sm font-medium">Date range picker</Label>
    <DateRangePicker :id="startId" :end-id="endId">
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

    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
      Built with native date inputs
    </p>
  </div>
</template>
