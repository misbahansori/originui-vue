<script setup lang="ts">
import { cn } from "@/lib/utils";
import { getLocalTimeZone, today } from "@internationalized/date";
import { LucideChevronLeft, LucideChevronRight } from "lucide-vue-next";
import {
  DateRangePickerCalendar,
  DateRangePickerCell,
  DateRangePickerCellTrigger,
  DateRangePickerContent,
  DateRangePickerGrid,
  DateRangePickerGridBody,
  DateRangePickerGridHead,
  DateRangePickerGridRow,
  DateRangePickerHeadCell,
  DateRangePickerHeader,
  DateRangePickerHeading,
  DateRangePickerNext,
  DateRangePickerPrev,
} from "reka-ui";

const now = today(getLocalTimeZone());
</script>
<template>
  <DateRangePickerContent
    :side-offset="4"
    class="bg-background text-popover-foreground data-entering:animate-in data-exiting:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 z-50 rounded-lg border shadow-lg outline-hidden"
  >
    <DateRangePickerCalendar
      v-slot="{ weekDays, grid }"
      class="max-h-[inherit] overflow-auto p-2"
    >
      <DateRangePickerHeader class="flex w-full items-center gap-1 pb-1">
        <DateRangePickerPrev
          class="text-muted-foreground/80 hover:bg-accent hover:text-foreground focus-visible:ring-ring/50 flex size-9 items-center justify-center rounded-md transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
        >
          <LucideChevronLeft class="h-4 w-4" />
        </DateRangePickerPrev>

        <DateRangePickerHeading class="grow text-center text-sm font-medium" />
        <DateRangePickerNext
          class="text-muted-foreground/80 hover:bg-accent hover:text-foreground focus-visible:ring-ring/50 flex size-9 items-center justify-center rounded-md transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
        >
          <LucideChevronRight class="h-4 w-4" />
        </DateRangePickerNext>
      </DateRangePickerHeader>
      <DateRangePickerGrid
        v-for="month in grid"
        :key="month.value.toString()"
        class="w-full border-collapse space-y-1 select-none"
      >
        <DateRangePickerGridHead>
          <DateRangePickerGridRow class="flex w-full justify-between">
            <DateRangePickerHeadCell
              v-for="day in weekDays"
              :key="day"
              class="text-muted-foreground/80 flex size-9 items-center justify-center rounded-md p-0 text-center text-xs font-medium"
            >
              {{ day }}
            </DateRangePickerHeadCell>
          </DateRangePickerGridRow>
        </DateRangePickerGridHead>
        <DateRangePickerGridBody class="[&_td]:px-0 [&_td]:py-px">
          <DateRangePickerGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            class="flex w-full"
          >
            <DateRangePickerCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
            >
              <DateRangePickerCellTrigger
                :day="weekDate"
                :month="month.value"
                :class="
                  cn(
                    'data-selected:bg-accent data-selected:text-foreground data-invalid:data-selection-end:bg-destructive data-invalid:data-selection-start:bg-destructive data-selection-end:bg-primary data-selection-start:bg-primary data-selection-end:text-primary-foreground data-selection-start:text-primary-foreground text-foreground hover:bg-accent hover:text-foreground data-focus-visible:ring-ring/50 relative flex size-9 items-center justify-center rounded-md p-0 text-sm font-normal whitespace-nowrap [transition-property:color,background-color,border-radius,box-shadow] duration-150 outline-none data-disabled:pointer-events-none data-disabled:opacity-30 data-focus-visible:z-10 data-focus-visible:ring-[3px] data-invalid:bg-red-100 data-outside-visible-view:opacity-30 data-selected:rounded-none data-selection-end:rounded-e-md data-invalid:data-selection-end:text-white data-selection-start:rounded-s-md data-invalid:data-selection-start:text-white data-unavailable:pointer-events-none data-unavailable:line-through data-unavailable:opacity-30',
                    weekDate.compare(now) === 0 &&
                      cn(
                        'data-selection-end:after:bg-background data-selection-start:after:bg-background after:bg-primary after:pointer-events-none after:absolute after:start-1/2 after:bottom-1 after:z-10 after:size-[3px] after:-translate-x-1/2 after:rounded-full',
                      ),
                  )
                "
              />
            </DateRangePickerCell>
          </DateRangePickerGridRow>
        </DateRangePickerGridBody>
      </DateRangePickerGrid>
    </DateRangePickerCalendar>
  </DateRangePickerContent>
</template>
