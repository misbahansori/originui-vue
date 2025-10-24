<script setup lang="ts">
import {
  MiniCalendar,
  MiniCalendarDay,
  MiniCalendarDays,
  MiniCalendarNavigation,
} from "@/registry/default/ui/mini-calendar";
import { CalendarDate } from "@internationalized/date";
import { ref } from "vue";

const selectedDate = ref<CalendarDate>();
</script>

<template>
  <div class="*:not-first:mt-2">
    <div class="flex items-center justify-center">
      <MiniCalendar v-model="selectedDate" :days="10" class="max-w-4xl">
        <MiniCalendarNavigation direction="prev" />
        <MiniCalendarDays v-slot="{ date }" class="overflow-x-auto">
          <MiniCalendarDay :date="date" class="shrink-0" />
        </MiniCalendarDays>
        <MiniCalendarNavigation direction="next" />
      </MiniCalendar>
    </div>
    <p class="text-muted-foreground mt-2 text-xs">
      Extended 10-day view for planning ahead
    </p>
  </div>
</template>
