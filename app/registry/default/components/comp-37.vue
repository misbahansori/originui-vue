<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { TimeFieldInput, TimeFieldRoot } from "reka-ui";
import { ref, useId } from "vue";

const id = useId();
const time = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id" class="text-foreground text-sm font-medium">
      Time input
    </Label>
    <TimeFieldRoot
      :id="id"
      v-slot="{ segments }"
      class="border-input bg-background text-foreground focus-within:border-ring focus-within:ring-ring/50 flex h-9 items-center rounded-md border px-3 shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]"
    >
      <template v-for="item in segments" :key="item.part">
        <TimeFieldInput
          v-if="item.part === 'literal'"
          :part="item.part"
          class="text-muted-foreground/70"
        >
          {{ item.value }}
        </TimeFieldInput>
        <TimeFieldInput
          v-else
          :part="item.part"
          class="data-[placeholder]:text-muted-foreground/70 focus:bg-muted rounded p-0.5 text-sm focus:shadow-black focus:outline-none"
        >
          {{ item.value }}
        </TimeFieldInput>
      </template>
    </TimeFieldRoot>
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
