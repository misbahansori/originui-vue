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
    <MiniCalendar v-model="selectedDate" class="p-4">
      <MiniCalendarNavigation direction="prev" />
      <MiniCalendarDays v-slot="{ date }" class="gap-3">
        <MiniCalendarDay :date="date" class="min-w-[4rem] p-3 text-base" />
      </MiniCalendarDays>
      <MiniCalendarNavigation direction="next" />
    </MiniCalendar>
    <p class="text-muted-foreground mt-2 text-xs">
      Large display with increased spacing and size
    </p>
  </div>
</template>
