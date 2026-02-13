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
import { CalendarDateTime, getLocalTimeZone, today, type DateValue } from "@internationalized/date";
import { LucideClock } from "lucide-vue-next";
import { CalendarRoot } from "reka-ui";

const todayDate = today(getLocalTimeZone());

const modelValue = ref(
  new CalendarDateTime(todayDate.year, todayDate.month, todayDate.day, 12, 0, 0),
) as Ref<DateValue>;

const inputValue = computed({
  get: () => {
    return modelValue.value.toDate(getLocalTimeZone()).toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  },
  set: (value: string) => {
    const [hours, minutes, seconds] = value.split(":").map(Number);
    modelValue.value = new CalendarDateTime(
      modelValue.value.year,
      modelValue.value.month,
      modelValue.value.day,
      hours,
      minutes,
      seconds || 0,
    );
  },
});
</script>

<template>
  <div>
    <div class="rounded-md border">
      <CalendarRoot
        v-model="modelValue"
        v-slot="{ grid, weekDays }"
        data-slot="calendar"
        class="p-3"
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
      <div class="border-t p-3">
        <div class="flex items-center gap-3">
          <Label for="time-input" className="text-xs">Enter time</Label>
          <div class="relative grow">
            <Input
              id="time-input"
              v-model="inputValue"
              type="time"
              step="1"
              defaultValue="12:00:00"
              class="peer appearance-none ps-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              aria-label="Select time"
            />
            <div
              class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50"
            >
              <LucideClock aria-hidden="true" class="size-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="text-muted-foreground mt-4 text-center text-xs">
      Time Input -
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
