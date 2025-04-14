<script setup lang="ts">
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerField,
  DatePickerInput,
  DatePickerTrigger,
} from "@/registry/default/ui/date-picker";
import { Label } from "@/registry/default/ui/label";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useId } from "vue";

const now = today(getLocalTimeZone());

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id" class="text-foreground text-sm font-medium">
      Date picker
    </Label>

    <DatePicker id="birthday" :is-date-unavailable="(date) => date.day === 19">
      <DatePickerField v-slot="{ segments }">
        <DatePickerInput
          v-for="item in segments"
          :key="item.part"
          :part="item.part"
        >
          {{ item.value }}
        </DatePickerInput>
        <DatePickerTrigger />
      </DatePickerField>

      <DatePickerCalendar />
    </DatePicker>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Built with native date input
    </p>
  </div>
</template>
