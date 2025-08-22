<script lang="ts" setup>
import { Button } from "@/registry/default/ui/button";
import {
  RangeCalendarCell,
  RangeCalendarCellTrigger,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHead,
  RangeCalendarGridRow,
  RangeCalendarHeadCell,
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeCalendarNextButton,
  RangeCalendarPrevButton,
} from "@/registry/default/ui/range-calendar";
import { getLocalTimeZone, today } from "@internationalized/date";
import { RangeCalendarRoot, type DateRange } from "reka-ui";

const todayDate = today(getLocalTimeZone());

const modelValue = ref({
  start: todayDate,
  end: todayDate,
}) as Ref<DateRange>;

const presets = [
  {
    label: "Today",
    from: todayDate,
    to: todayDate,
  },
  {
    label: "Yesterday",
    from: todayDate.subtract({ days: 1 }),
    to: todayDate.subtract({ days: 1 }),
  },
  {
    label: "Last 7 days",
    from: todayDate,
    to: todayDate.subtract({ days: 7 }),
  },
  {
    label: "Last 30 days",
    from: todayDate,
    to: todayDate.subtract({ days: 30 }),
  },
  {
    label: "Last 2 months",
    from: todayDate,
    to: todayDate.subtract({ months: 2 }),
  },
  {
    label: "Month to date",
    from: todayDate,
    to: todayDate.subtract({ days: todayDate.day }),
  },
  {
    label: "Last 2 years",
    from: todayDate,
    to: todayDate.subtract({ years: 2 }),
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
              :variant="
                preset.from === modelValue.start && preset.to === modelValue.end
                  ? 'default'
                  : 'ghost'
              "
              size="sm"
              class="w-full justify-start"
              @click="
                modelValue = {
                  start: preset.from,
                  end: preset.to,
                }
              "
            >
              {{ preset.label }}
            </Button>
          </div>
        </div>
        <RangeCalendarRoot
          v-slot="{ grid, weekDays }"
          data-slot="range-calendar"
          class="p-3"
          v-model="modelValue"
        >
          <RangeCalendarHeader>
            <RangeCalendarHeading />

            <div class="flex items-center gap-1">
              <RangeCalendarPrevButton />
              <RangeCalendarNextButton />
            </div>
          </RangeCalendarHeader>

          <div
            class="mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0"
          >
            <div
              v-for="month in grid"
              :key="month.value.toString()"
              class="not-first:border-l not-first:ps-4"
            >
              <RangeCalendarGrid>
                <RangeCalendarGridHead>
                  <RangeCalendarGridRow>
                    <RangeCalendarHeadCell v-for="day in weekDays" :key="day">
                      {{ day }}
                    </RangeCalendarHeadCell>
                  </RangeCalendarGridRow>
                </RangeCalendarGridHead>
                <RangeCalendarGridBody>
                  <RangeCalendarGridRow
                    v-for="(weekDates, index) in month.rows"
                    :key="`weekDate-${index}`"
                    class="mt-2 w-full"
                  >
                    <RangeCalendarCell
                      v-for="weekDate in weekDates"
                      :key="weekDate.toString()"
                      :date="weekDate"
                    >
                      <RangeCalendarCellTrigger
                        :day="weekDate"
                        :month="month.value"
                      />
                    </RangeCalendarCell>
                  </RangeCalendarGridRow>
                </RangeCalendarGridBody>
              </RangeCalendarGrid>
            </div>
          </div>
        </RangeCalendarRoot>
      </div>
    </div>
    <p class="text-muted-foreground mt-4 text-center text-xs">
      Range Calendar with presets -
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
