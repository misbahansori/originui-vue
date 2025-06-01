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
  CalendarNextButton,
  CalendarPrevButton,
} from "@/registry/default/ui/calendar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible";
import {
  CalendarDate,
  getLocalTimeZone,
  today,
  type DateValue,
} from "@internationalized/date";
import { useTimeoutFn } from "@vueuse/core";
import { LucideChevronDown } from "lucide-vue-next";
import { CalendarRoot } from "reka-ui";

const todayDate = today(getLocalTimeZone());

const modelValue = ref(todayDate) as Ref<DateValue>;

const years = Array.from({ length: 40 }, (_, i) => todayDate.year - 20 + i);

const getMonthName = (month: number) => {
  return new CalendarDate(todayDate.year, month, 1)
    .toDate(getLocalTimeZone())
    .toLocaleString("en-US", { month: "short" });
};

const isCurrentYear = (year: number) => {
  return year === modelValue.value.year;
};

const collapsibleOpen = ref(false);

const scrollToCurrentYear = () => {
  const currentYearElement = document.querySelector(
    `[data-year="${modelValue.value.year}"]`,
  );

  if (currentYearElement) {
    currentYearElement.scrollIntoView({
      behavior: "instant",
      block: "start",
    });
  }
};

const { start } = useTimeoutFn(scrollToCurrentYear, 0);

watch(collapsibleOpen, (isOpen) => {
  if (isOpen) {
    start();
  }
});

const selectMonth = (year: number, month: number) => {
  modelValue.value = new CalendarDate(year, month, modelValue.value.day);
  collapsibleOpen.value = false;
};
</script>

<template>
  <div>
    <CalendarRoot
      v-model="modelValue"
      v-slot="{ grid, weekDays }"
      data-slot="calendar"
      class="relative rounded-md border p-3"
    >
      <CalendarHeader class="static flex justify-between">
        <Collapsible v-model:open="collapsibleOpen">
          <CollapsibleTrigger asChild>
            <Button
              class="flex items-center gap-2 text-sm font-medium hover:bg-transparent [&[data-state=open]>svg]:rotate-180"
              variant="ghost"
              size="sm"
            >
              <CalendarHeading class="flex-1" />
              <LucideChevronDown
                class="text-muted-foreground/80 size-4 shrink-0 transition-transform duration-200"
                aria-hidden="true"
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent
            class="bg-background absolute inset-x-0 top-15 bottom-0 z-20"
          >
            <ScrollArea class="h-full">
              <Collapsible
                v-for="year in years"
                :key="year"
                class="border-t px-2 py-1.5"
                :defaultOpen="isCurrentYear(year)"
                :data-year="year"
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    class="flex w-full justify-start gap-2 text-sm font-medium hover:bg-transparent [&[data-state=open]>svg]:rotate-180"
                  >
                    <LucideChevronDown
                      class="text-muted-foreground/80 size-4 shrink-0 transition-transform duration-200"
                      aria-hidden="true"
                    />
                    <span>{{ year }}</span>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent
                  class="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden px-3 py-1 text-sm transition-all"
                >
                  <div class="grid grid-cols-3 gap-2">
                    <Button
                      v-for="month in 12"
                      :key="month"
                      :variant="
                        modelValue.year === year && modelValue.month === month
                          ? 'default'
                          : 'outline'
                      "
                      size="sm"
                      class="h-7"
                      @click="selectMonth(year, month)"
                    >
                      {{ getMonthName(month) }}
                    </Button>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </ScrollArea>
          </CollapsibleContent>
        </Collapsible>

        <div class="flex items-center gap-1">
          <CalendarPrevButton />
          <CalendarNextButton />
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
