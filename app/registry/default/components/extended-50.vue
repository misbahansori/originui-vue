<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  MiniCalendar,
  MiniCalendarDay,
  MiniCalendarDays,
  MiniCalendarNavigation,
} from "@/registry/default/ui/mini-calendar";
import { CalendarDate } from "@internationalized/date";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import { ref } from "vue";

const selectedDate = ref<CalendarDate>();
</script>

<template>
  <div>
    <MiniCalendar v-model="selectedDate">
      <MiniCalendarNavigation
        direction="prev"
        :as="Button"
        variant="outline"
        size="icon"
        class="shrink-0"
      >
        <ChevronLeft class="size-4" />
      </MiniCalendarNavigation>
      <MiniCalendarDays v-slot="{ date }">
        <MiniCalendarDay :date="date" />
      </MiniCalendarDays>
      <MiniCalendarNavigation
        direction="next"
        :as="Button"
        variant="outline"
        size="icon"
        class="shrink-0"
      >
        <ChevronRight class="size-4" />
      </MiniCalendarNavigation>
    </MiniCalendar>
    <p class="text-muted-foreground mt-2 text-xs">
      Custom navigation with outline button styling
    </p>
  </div>
</template>
