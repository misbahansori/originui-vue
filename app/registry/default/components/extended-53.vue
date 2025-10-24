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
    <MiniCalendar v-model="selectedDate" class="bg-accent border-0">
      <MiniCalendarNavigation direction="prev" />
      <MiniCalendarDays v-slot="{ date }">
        <MiniCalendarDay :date="date" />
      </MiniCalendarDays>
      <MiniCalendarNavigation direction="next" />
    </MiniCalendar>
    <p class="text-muted-foreground mt-2 text-xs">Accent background design</p>
  </div>
</template>
