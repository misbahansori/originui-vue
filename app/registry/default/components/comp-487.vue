<script setup lang="ts">
import { Calendar } from "@/registry/default/ui/calendar";
import {
  type DateValue,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
import type { Ref } from "vue";
import { ref } from "vue";

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>;
</script>

<template>
  <Calendar
    v-model="value"
    :weekday-format="'short'"
    class="rounded-md border"
  />
</template>
