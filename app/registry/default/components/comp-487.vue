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
  <div>
    <Calendar
      v-model="value"
      :weekday-format="'short'"
      class="rounded-md border"
    />
    <p class="text-muted-foreground mt-4 text-center text-xs">
      Calendar -
      <a
        class="hover:text-foreground underline"
        href="https://reka-ui.com/docs/components/calendar#calendar"
        target="_blank"
        rel="noopener nofollow"
      >
        Reka UI
      </a>
    </p>
  </div>
</template>
