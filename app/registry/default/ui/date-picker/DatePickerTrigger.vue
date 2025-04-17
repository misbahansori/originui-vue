<script setup lang="ts">
import { cn } from "@/lib/utils";
import { LucideCalendar } from "lucide-vue-next";
import { DatePickerTrigger } from "reka-ui";
import type { HTMLAttributes } from "vue";
const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <DatePickerTrigger
    v-bind="$attrs"
    :class="
      cn(
        'text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  >
    <slot>
      <LucideCalendar :size="16" />
    </slot>
  </DatePickerTrigger>
</template>
