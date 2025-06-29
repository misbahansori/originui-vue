<script lang="ts" setup>
import {
  getLocalTimeZone,
  today,
  type DateValue,
} from "@internationalized/date";
import { formatDate } from "@vueuse/core";
import { RangeCalendarRoot, type DateRange } from "reka-ui";
import {
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeCalendarNextButton,
  RangeCalendarPrevButton,
} from "~/registry/default/ui/range-calendar";

const todayDate = today(getLocalTimeZone());

const modelValue = ref({
  start: todayDate,
  end: todayDate,
}) as Ref<DateRange>;

const generateMockPriceData = () => {
  const data: Record<string, number> = {};

  for (let i = 0; i < 180; i++) {
    const date = new Date(todayDate.toDate(getLocalTimeZone()));
    date.setDate(todayDate.toDate(getLocalTimeZone()).getDate() + i);
    const dateKey = formatDate(date, "YYYY-MM-DD");
    const randomPrice = Math.floor(Math.random() * (200 - 80 + 1)) + 80;
    data[dateKey] = randomPrice;
  }

  return data;
};

const mockPriceData = ref(generateMockPriceData());

const isDateDisabled = (date: DateValue) => {
  return !mockPriceData.value[
    formatDate(date.toDate(getLocalTimeZone()), "YYYY-MM-DD")
  ];
};

const getPriceData = (date: DateValue) =>
  mockPriceData.value[
    formatDate(date.toDate(getLocalTimeZone()), "YYYY-MM-DD")
  ] ?? null;

const GOOD_PRICE_THRESHOLD = 100;

const isGoodPrice = (date: DateValue) => {
  const price = getPriceData(date);

  return price && price < GOOD_PRICE_THRESHOLD;
};
</script>

<template>
  <div>
    <RangeCalendarRoot
      v-slot="{ grid, weekDays }"
      data-slot="range-calendar"
      v-model="modelValue"
      class="rounded-md border p-3"
      :numberOfMonths="2"
      :isDateDisabled="isDateDisabled"
    >
      <RangeCalendarHeader>
        <RangeCalendarHeading />

        <div class="flex items-center gap-1">
          <RangeCalendarPrevButton />
          <RangeCalendarNextButton />
        </div>
      </RangeCalendarHeader>

      <div class="mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
        <div
          v-for="month in grid"
          :key="month.value.toString()"
          class="not-first:border-l not-first:ps-4"
        >
          <RangeCalendarGrid>
            <RangeCalendarGridHead>
              <RangeCalendarGridRow>
                <RangeCalendarHeadCell
                  v-for="day in weekDays"
                  :key="day"
                  class="w-12"
                >
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
                  class="has-data-[outside-view]:invisible"
                >
                  <RangeCalendarCellTrigger
                    :day="weekDate"
                    :month="month.value"
                    class="flex size-12 flex-col items-center justify-center gap-1 data-[outside-view]:invisible"
                  >
                    <span>
                      {{ formatDate(weekDate.toDate(getLocalTimeZone()), "D") }}
                    </span>
                    <span
                      v-if="getPriceData(weekDate)"
                      class="text-[10px] font-medium"
                      :class="{
                        'text-emerald-500': isGoodPrice(weekDate),
                        'text-muted-foreground group-data-selected:text-primary-foreground/70':
                          !isGoodPrice(weekDate),
                      }"
                    >
                      ${{ getPriceData(weekDate) }}
                    </span>
                  </RangeCalendarCellTrigger>
                </RangeCalendarCell>
              </RangeCalendarGridRow>
            </RangeCalendarGridBody>
          </RangeCalendarGrid>
        </div>
      </div>
    </RangeCalendarRoot>
    <p class="text-muted-foreground mt-4 text-center text-xs">
      Pricing Calendar -
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
