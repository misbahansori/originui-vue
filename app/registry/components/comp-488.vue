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
  <RangeCalendar v-model="value" class="rounded-md border" />
</template>
