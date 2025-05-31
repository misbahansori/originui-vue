<script lang="ts" setup>
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
import {
  getLocalTimeZone,
  today,
  type DateValue,
} from "@internationalized/date";
import { CalendarRoot } from "reka-ui";

const todayDate = today(getLocalTimeZone());

const modelValue = ref(todayDate) as Ref<DateValue>;

const getWeeksInYear = (date: DateValue) => {
  const d = date.toDate(getLocalTimeZone());
  const start = new Date(d.getFullYear(), 0, 1);
  const days = Math.floor(
    (d.getTime() - start.getTime()) / (24 * 60 * 60 * 1000),
  );
  return Math.ceil((days + start.getDay()) / 7);
};
</script>

<template>
  <div>
    <CalendarRoot
      v-model="modelValue"
      v-slot="{ grid, weekDays }"
      data-slot="calendar"
      class="rounded-md border p-3"
    >
      <CalendarHeader>
        <CalendarHeading />
        <div class="flex items-center gap-1">
          <CalendarPrevButton class="absolute left-1" />
          <CalendarNextButton class="absolute right-1" />
        </div>
      </CalendarHeader>
      <div class="mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
        <CalendarGrid v-for="month in grid" :key="month.value.toString()">
          <CalendarGridHead>
            <CalendarGridRow>
              <CalendarHeadCell key="week"></CalendarHeadCell>
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
              <CalendarHeadCell :key="`weekNumber-${index}`">
                <span class="inline-flex size-9 items-center justify-center">
                  {{ getWeeksInYear(weekDates[0]) }}
                </span>
              </CalendarHeadCell>

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
  </div>
</template>
