<script setup lang="ts">
import {
  MiniCalendar,
  MiniCalendarDay,
  MiniCalendarDays,
  MiniCalendarNavigation,
} from "@/registry/default/ui/mini-calendar";
import { ref } from "vue";

const selectedDate = ref<Date | undefined>(new Date());
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
  </div>
</template>
