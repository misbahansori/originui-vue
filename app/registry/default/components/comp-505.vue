<script lang="ts" setup>
import { Button } from "@/registry/default/ui/button";
import {
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarHeader,
  CalendarHeading,
  CalendarNextButton,
  CalendarPrevButton,
} from "@/registry/default/ui/calendar";
import { ScrollArea } from "@/registry/default/ui/scroll-area";
import {
  CalendarDateTime,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
import { formatDate } from "@vueuse/core";
import { CalendarRoot } from "reka-ui";

const todayDate = today(getLocalTimeZone());
const modelValue = ref(
  new CalendarDateTime(
    todayDate.year,
    todayDate.month,
    todayDate.day,
    12,
    30,
    0,
  ),
);

const timeSlots = [
  { time: "09:00", available: false },
  { time: "09:30", available: false },
  { time: "10:00", available: true },
  { time: "10:30", available: true },
  { time: "11:00", available: true },
  { time: "11:30", available: true },
  { time: "12:00", available: false },
  { time: "12:30", available: true },
  { time: "13:00", available: true },
  { time: "13:30", available: true },
  { time: "14:00", available: true },
  { time: "14:30", available: false },
  { time: "15:00", available: false },
  { time: "15:30", available: true },
  { time: "16:00", available: true },
  { time: "16:30", available: true },
  { time: "17:00", available: true },
  { time: "17:30", available: true },
];

const handleTimeClick = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  modelValue.value = new CalendarDateTime(
    modelValue.value.year,
    modelValue.value.month,
    modelValue.value.day,
    hours,
    minutes,
  );
};

const isSelectedTime = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return modelValue.value.hour === hours && modelValue.value.minute === minutes;
};
</script>

<template>
  <div>
    <div class="flex gap-4 rounded-md border p-3 max-sm:flex-col">
      <CalendarRoot
        v-model="modelValue"
        v-slot="{ grid, weekDays }"
        data-slot="calendar"
      >
        <CalendarHeader>
          <CalendarHeading />
          <div class="flex items-center gap-1">
            <CalendarPrevButton class="absolute left-1" />
            <CalendarNextButton class="absolute right-1" />
          </div>
        </CalendarHeader>
        <div
          class="mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0"
        >
          <CalendarGrid v-for="month in grid" :key="month.value.toString()">
            <CalendarGridHead>
              <CalendarGridRow>
                <CalendarHeadCell v-for="day in weekDays" :key="day">
                  {{ day }}
                </CalendarHeadCell>
              </CalendarGridRow>
            </CalendarGridHead>
            <CalendarGridBody>
              <CalendarGridRow
                v-for="(weekDates, index) in month.rows"
                :key="`weekDate-${index}`"
                class="mt-2 w-full"
              >
                <CalendarCell
                  v-for="weekDate in weekDates"
                  :key="weekDate.toString()"
                  :date="weekDate"
                >
                  <CalendarCellTrigger :day="weekDate" :month="month.value" />
                </CalendarCell>
              </CalendarGridRow>
            </CalendarGridBody>
          </CalendarGrid>
        </div>
      </CalendarRoot>
      <div class="relative w-full max-sm:h-48 sm:w-40">
        <div class="absolute inset-0 max-sm:border-t">
          <ScrollArea class="h-full sm:border-s">
            <div class="space-y-3">
              <div class="flex h-5 shrink-0 items-center px-5">
                <p class="text-sm font-medium">
                  {{
                    formatDate(modelValue.toDate(getLocalTimeZone()), "dddd, D")
                  }}
                </p>
              </div>
              <div class="grid gap-1.5 px-5 max-sm:grid-cols-2">
                <Button
                  v-for="time in timeSlots"
                  :key="time.time"
                  :variant="isSelectedTime(time.time) ? 'default' : 'outline'"
                  size="sm"
                  class="w-full"
                  :disabled="!time.available"
                  @click="handleTimeClick(time.time)"
                >
                  {{ time.time }}
                </Button>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
    <p class="text-muted-foreground mt-4 text-center text-xs">
      Appointment Picker -
      <a
        class="hover:text-foreground underline"
        href="https://reka-ui.com/docs/components/calendar#calendar"
        target="_blank"
        rel="noopener nofollow"
      >
        Reka UI Calendar
      </a>
    </p>
  </div>
</template>
