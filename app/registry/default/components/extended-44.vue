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
    <MiniCalendar v-model="selectedDate">
      <MiniCalendarNavigation direction="prev" />
      <MiniCalendarDays v-slot="{ date }">
        <MiniCalendarDay :date="date" />
      </MiniCalendarDays>
      <MiniCalendarNavigation direction="next" />
    </MiniCalendar>
    <p class="text-muted-foreground mt-2 text-xs">
      Default 5-day horizontal calendar view
    </p>
  </div>
</template>
