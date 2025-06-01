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
  CalendarDate,
  getLocalTimeZone,
  today,
  type DateValue,
} from "@internationalized/date";
import { LucideCalendar } from "lucide-vue-next";
import { CalendarRoot } from "reka-ui";

const todayDate = today(getLocalTimeZone());

const modelValue = ref(todayDate) as Ref<DateValue>;

const inputValue = computed({
  get: () => modelValue.value.toString(),
  set: (value: string) => {
    modelValue.value = new CalendarDate(
      Number(value.split("-")[0]),
      Number(value.split("-")[1]),
      Number(value.split("-")[2]),
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
      <div class="border-t p-3">
        <div class="flex items-center gap-3">
          <Label for="date-input" className="text-xs">Enter date</Label>
          <div class="relative grow">
            <Input
              id="date-input"
              v-model="inputValue"
              type="date"
              class="peer appearance-none ps-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              aria-label="Select date"
            />
            <div
              class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50"
            >
              <LucideCalendar aria-hidden="true" class="size-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="text-muted-foreground mt-4 text-center text-xs">
      Date Input -
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
