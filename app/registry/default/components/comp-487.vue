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
import { getLocalTimeZone, today, type DateValue } from "@internationalized/date";
import { CalendarRoot } from "reka-ui";

const todayDate = today(getLocalTimeZone());

const modelValue = ref(todayDate) as Ref<DateValue>;
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
      Calendar -
      <a
        class="hover:text-foreground underline"
        href="https://reka-ui.com/docs/components/calendar#calendar"
        target="_blank"
      >
        reka-ui.com
      </a>
    </p>
  </div>
</template>
