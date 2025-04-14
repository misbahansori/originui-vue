<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { TimeField, TimeFieldInput } from "@/registry/default/ui/time-field";
import { ref, useId } from "vue";

const id = useId();
const time = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id" class="text-foreground text-sm font-medium">
      Time input
    </Label>
    <TimeField :id="id" v-slot="{ segments }">
      <template v-for="item in segments" :key="item.part">
        <TimeFieldInput :part="item.part">
          {{ item.value }}
        </TimeFieldInput>
      </template>
    </TimeField>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Built with reka-ui
      <a
        class="hover:text-foreground underline"
        href="https://reka-ui.com/docs/components/time-field"
        target="_blank"
        rel="noopener noreferrer"
      >
        TimeField
      </a>
    </p>
  </div>
</template>
