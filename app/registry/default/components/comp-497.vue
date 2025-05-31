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
} from "@/registry/default/ui/calendar";
import {
  CalendarDate,
  getLocalTimeZone,
  today,
  type DateValue,
} from "@internationalized/date";
import { CalendarRoot } from "reka-ui";

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>;
const monthNames = Array.from({ length: 12 }, (_, i) => {
  const date = new CalendarDate(2024, i + 1, 1);
  return date
    .toDate(getLocalTimeZone())
    .toLocaleString("en-US", { month: "long" });
});

const todayDate = today(getLocalTimeZone());
const currentYear = todayDate.year;
const currentMonth = todayDate.month;
const years = Array.from({ length: 40 }, (_, i) => currentYear - 20 + i);

const selectedMonth = ref(currentMonth);
const selectedYear = ref(currentYear);

const placeholder = computed(() => {
  return new CalendarDate(selectedYear.value, selectedMonth.value, 1);
});
</script>

<template>
  <div>
    <CalendarRoot
      v-model="value"
      :placeholder="placeholder"
      v-slot="{ grid, weekDays }"
      data-slot="calendar"
      class="rounded-md border p-3"
    >
      <CalendarHeader class="flex justify-between">
        <div class="flex w-full items-center gap-2">
          <Select v-model="selectedMonth" class="w-full flex-1">
            <SelectTrigger size="sm">
              <SelectValue placeholder="Select a month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                v-for="(month, i) in monthNames"
                :key="i"
                :value="i + 1"
              >
                {{ month }}
              </SelectItem>
            </SelectContent>
          </Select>
          <Select v-model="selectedYear">
            <SelectTrigger size="sm">
              <SelectValue placeholder="Select a year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem v-for="year in years" :key="year" :value="year">
                {{ year }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CalendarHeader>
      <div class="mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
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
    <p class="text-muted-foreground mt-4 text-center text-xs">
      Right navigation -
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
