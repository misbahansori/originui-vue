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
  <div>
    <MiniCalendar v-model="selectedDate" class="justify-start gap-4">
      <MiniCalendarDays v-slot="{ date }">
        <MiniCalendarDay :date="date" />
      </MiniCalendarDays>
      <div class="ml-auto flex gap-1">
        <MiniCalendarNavigation direction="prev" />
        <MiniCalendarNavigation direction="next" />
      </div>
    </MiniCalendar>
    <p class="text-muted-foreground mt-2 text-xs">
      Alternative layout with navigation buttons grouped on the right
    </p>
  </div>
</template>
