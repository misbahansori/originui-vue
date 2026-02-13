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
    <MiniCalendar v-model="selectedDate" class="border-0 bg-transparent p-0">
      <MiniCalendarNavigation direction="prev" />
      <MiniCalendarDays v-slot="{ date }" class="gap-2">
        <MiniCalendarDay :date="date" class="min-w-[3.5rem]" />
      </MiniCalendarDays>
      <MiniCalendarNavigation direction="next" />
    </MiniCalendar>
    <p class="text-muted-foreground mt-2 text-xs">Borderless minimal design without background</p>
  </div>
</template>
