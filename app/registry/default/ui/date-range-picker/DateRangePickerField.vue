<script setup lang="ts">
import { cn } from "@/lib/utils";
import { DateRangePickerField } from "reka-ui";
import { type HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DateRangePickerField
    v-bind="$attrs"
    v-slot="slotProps"
    :class="
      cn(
        'border-input bg-background text-foreground focus-within:border-ring focus-within:ring-ring/50 relative flex h-9 items-center rounded-md border px-3 shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]',
        props.class,
      )
    "
  >
    <slot v-bind="slotProps" />
  </DateRangePickerField>
</template>
