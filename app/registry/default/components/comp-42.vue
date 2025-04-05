<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { ref, useId } from "vue";

const startId = useId();
const endId = useId();

const startDate = ref("");
const endDate = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="startId" class="text-foreground text-sm font-medium">
      Date range picker
    </Label>
    <div class="relative">
      <div
        class="border-input bg-background text-foreground focus-within:border-ring focus-within:ring-ring/50 flex h-9 items-center rounded-md border px-3 shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]"
      >
        <input
          :id="startId"
          v-model="startDate"
          type="date"
          class="w-full bg-transparent text-sm focus:outline-none"
        />
        <span aria-hidden="true" class="text-muted-foreground/70 px-2">-</span>
        <input
          :id="endId"
          v-model="endDate"
          type="date"
          class="w-full bg-transparent text-sm focus:outline-none"
        />
      </div>
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Built with native date inputs
    </p>
  </div>
</template>
