<script setup lang="ts">
import { getLocalTimeZone, today } from "@internationalized/date";
import type { DateRange } from "reka-ui";

const start = today(getLocalTimeZone());
const end = start.add({ days: 7 });

const value = ref({
  start,
  end,
}) as Ref<DateRange>;
</script>

<template>
  <div>
    <RangeCalendar v-model="value" class="rounded-md border" />
    <p class="text-muted-foreground mt-4 text-center text-xs">
      Range calendar -
      <a
        class="hover:text-foreground underline"
        href="https://reka-ui.com/docs/components/calendar#range-calendar"
        target="_blank"
        rel="noopener nofollow"
      >
        Reka UI
      </a>
    </p>
  </div>
</template>
