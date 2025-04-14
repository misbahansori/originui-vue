<script setup lang="ts">
import { DateField, DateFieldInput } from "@/registry/default/ui/date-field";
import { Label } from "@/registry/default/ui/label";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id" class="text-foreground text-sm font-medium">
      Date and time input
    </Label>
    <DateField
      :id="id"
      granularity="minute"
      :hourCycle="24"
      v-slot="{ segments }"
    >
      <template v-for="item in segments" :key="item.part">
        <DateFieldInput :part="item.part">
          {{ item.value }}
        </DateFieldInput>
      </template>
    </DateField>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Built with reka-ui
      <a
        class="hover:text-foreground underline"
        href="https://reka-ui.com/docs/components/date-field"
        target="_blank"
        rel="noopener noreferrer"
      >
        DateField
      </a>
    </p>
  </div>
</template>
