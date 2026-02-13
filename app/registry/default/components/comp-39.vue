<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { TimeField, TimeFieldInput } from "@/registry/default/ui/time-field";
import { LucideClock } from "lucide-vue-next";
import { ref, useId } from "vue";

const id = useId();
const time = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id" class="text-foreground text-sm font-medium">Time input with end icon</Label>
    <div class="relative">
      <div
        class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 z-10 flex items-center justify-center pe-3"
      >
        <LucideClock :size="16" aria-hidden="true" />
      </div>
      <TimeField :id="id" v-slot="{ segments }" class="pe-9">
        <TimeFieldInput v-for="item in segments" :part="item.part">
          {{ item.value }}
        </TimeFieldInput>
      </TimeField>
    </div>
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
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
