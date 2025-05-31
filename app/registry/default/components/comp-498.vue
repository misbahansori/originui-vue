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

const todayDate = today(getLocalTimeZone());
const modelValue = ref(todayDate) as Ref<DateValue>;

const selectedDate = ref({
  year: todayDate.year,
  month: todayDate.month,
});

const placeholder = computed({
  get: () =>
    new CalendarDate(selectedDate.value.year, selectedDate.value.month, 1),
  set: (newDate: DateValue) => {
    selectedDate.value = {
      year: newDate.year,
      month: newDate.month,
    };
  },
});

const monthPlaceholder = computed(() =>
  placeholder.value
    .toDate(getLocalTimeZone())
    .toLocaleString("en-US", { month: "long" }),
);

const years = Array.from({ length: 40 }, (_, i) => todayDate.year - 20 + i);
</script>

<template>
  <div>
    <CalendarRoot
      v-model="modelValue"
      v-model:placeholder="placeholder"
      v-slot="{ grid, weekDays }"
      data-slot="calendar"
      class="rounded-md border p-3"
    >
      <CalendarHeader class="flex justify-between">
        <div class="flex w-full items-center gap-2">
          <CalendarHeader class="flex justify-center gap-2 px-10">
            <span class="text-sm font-medium">
              {{ monthPlaceholder }}
            </span>
            <Select v-model="selectedDate.year">
              <SelectTrigger size="sm" class="w-auto">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem v-for="year in years" :key="year" :value="year">
                  {{ year }}
                </SelectItem>
              </SelectContent>
            </Select>
            <div class="flex items-center gap-1">
              <CalendarPrevButton class="absolute left-1" />
              <CalendarNextButton class="absolute right-1" />
            </div>
          </CalendarHeader>
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
