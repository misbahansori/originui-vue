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
import { getLocalTimeZone, today, type DateValue } from "@internationalized/date";
import { CalendarRoot } from "reka-ui";

const todayDate = today(getLocalTimeZone());

const modelValue = ref(todayDate) as Ref<DateValue>;

const presets = [
  {
    label: "Today",
    value: todayDate,
  },
  {
    label: "Yesterday",
    value: todayDate.subtract({ days: 1 }),
  },
  {
    label: "Last week",
    value: todayDate.subtract({ days: 7 }),
  },
  {
    label: "Last month",
    value: todayDate.subtract({ months: 1 }),
  },
  {
    label: "Last 2 months",
    value: todayDate.subtract({ months: 2 }),
  },
  {
    label: "Last year",
    value: todayDate.subtract({ years: 1 }),
  },
  {
    label: "Last 2 years",
    value: todayDate.subtract({ years: 2 }),
  },
];
</script>

<template>
  <div>
    <div class="rounded-md border p-3">
      <div class="flex gap-4 max-sm:flex-col">
        <div class="relative max-sm:order-1 max-sm:border-t sm:w-32">
          <div class="flex h-full flex-col pe-2 sm:border-e">
            <Button
              v-for="preset in presets"
              :key="preset.label"
              :variant="preset.value === modelValue ? 'default' : 'ghost'"
              size="sm"
              class="w-full justify-start"
              @click="modelValue = preset.value"
            >
              {{ preset.label }}
            </Button>
          </div>
        </div>
        <CalendarRoot v-model="modelValue" v-slot="{ grid, weekDays }" data-slot="calendar">
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
      </div>
    </div>
    <p class="text-muted-foreground mt-4 text-center text-xs">
      Calendar with presets -
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
