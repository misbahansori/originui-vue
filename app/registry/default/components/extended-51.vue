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
    <MiniCalendar v-model="selectedDate" class="rounded-full px-4">
      <MiniCalendarNavigation direction="prev" />
      <MiniCalendarDays v-slot="{ date }" class="gap-1">
        <MiniCalendarDay :date="date" class="rounded-full" />
      </MiniCalendarDays>
      <MiniCalendarNavigation direction="next" />
    </MiniCalendar>
    <p class="text-muted-foreground mt-2 text-xs">
      Rounded pill style with circular day buttons
    </p>
  </div>
</template>
