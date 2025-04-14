<script setup lang="ts">
import { cn } from "@/lib/utils";
import { getLocalTimeZone, today } from "@internationalized/date";
import { LucideChevronLeft, LucideChevronRight } from "lucide-vue-next";
import {
  DatePickerCalendar,
  DatePickerCell,
  DatePickerCellTrigger,
  DatePickerContent,
  DatePickerGrid,
  DatePickerGridBody,
  DatePickerGridHead,
  DatePickerGridRow,
  DatePickerHeadCell,
  DatePickerHeader,
  DatePickerHeading,
  DatePickerNext,
  DatePickerPrev,
} from "reka-ui";

const now = today(getLocalTimeZone());
</script>
<template>
  <DatePickerContent
    :side-offset="4"
    class="bg-background text-popover-foreground data-entering:animate-in data-exiting:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 z-50 rounded-lg border shadow-lg outline-hidden"
  >
    <DatePickerCalendar
      v-slot="{ weekDays, grid }"
      class="max-h-[inherit] overflow-auto p-2"
    >
      <DatePickerHeader class="flex w-full items-center gap-1 pb-1">
        <DatePickerPrev
          class="text-muted-foreground/80 hover:bg-accent hover:text-foreground focus-visible:ring-ring/50 flex size-9 items-center justify-center rounded-md transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
        >
          <LucideChevronLeft class="h-4 w-4" />
        </DatePickerPrev>

        <DatePickerHeading class="grow text-center text-sm font-medium" />
        <DatePickerNext
          class="text-muted-foreground/80 hover:bg-accent hover:text-foreground focus-visible:ring-ring/50 flex size-9 items-center justify-center rounded-md transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
        >
          <LucideChevronRight class="h-4 w-4" />
        </DatePickerNext>
      </DatePickerHeader>
      <DatePickerGrid
        v-for="month in grid"
        :key="month.value.toString()"
        class="w-full border-collapse space-y-1 select-none"
      >
        <DatePickerGridHead>
          <DatePickerGridRow class="flex w-full justify-between">
            <DatePickerHeadCell
              v-for="day in weekDays"
              :key="day"
              class="text-muted-foreground/80 flex size-9 items-center justify-center rounded-md p-0 text-center text-xs font-medium"
            >
              {{ day }}
            </DatePickerHeadCell>
          </DatePickerGridRow>
        </DatePickerGridHead>
        <DatePickerGridBody class="[&_td]:px-0 [&_td]:py-px">
          <DatePickerGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            class="flex w-full"
          >
            <DatePickerCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
            >
              <DatePickerCellTrigger
                :day="weekDate"
                :month="month.value"
                :class="
                  cn(
                    'text-foreground hover:bg-accent data-selected:bg-primary hover:text-foreground data-selected:text-primary-foreground data-focus-visible:ring-ring/50 relative flex size-9 items-center justify-center rounded-md p-0 text-sm font-normal whitespace-nowrap [transition-property:color,background-color,border-radius,box-shadow] duration-150 outline-none data-disabled:pointer-events-none data-disabled:opacity-30 data-focus-visible:z-10 data-focus-visible:ring-[3px] data-outside-visible-view:opacity-30 data-unavailable:pointer-events-none data-unavailable:line-through data-unavailable:opacity-30',
                    weekDate.compare(now) === 0 &&
                      cn(
                        'after:bg-primary after:pointer-events-none after:absolute after:start-1/2 after:bottom-1 after:z-10 after:size-[3px] after:-translate-x-1/2 after:rounded-full',
                      ),
                  )
                "
              />
            </DatePickerCell>
          </DatePickerGridRow>
        </DatePickerGridBody>
      </DatePickerGrid>
    </DatePickerCalendar>
  </DatePickerContent>
</template>
