<script setup lang="ts">
import { Calendar } from "@/registry/default/ui/calendar";
import {
  getLocalTimeZone,
  today,
  type DateValue,
} from "@internationalized/date";
import { ref } from "vue";

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>;
</script>

<template>
  <div>
    <Calendar v-model="value" class="rounded-md border p-2" />
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
