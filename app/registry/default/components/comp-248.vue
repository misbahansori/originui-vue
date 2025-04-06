<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";
import { ref } from "vue";

const value = ref([50]);
</script>

<template>
  <div class="*:not-first:mt-4">
    <Label>Slider with labels</Label>
    <div>
      <span
        class="text-muted-foreground mb-3 flex w-full items-center justify-between gap-2 text-xs font-medium"
        aria-hidden="true"
      >
        <span>Low</span>
        <span>High</span>
      </span>
      <Slider v-model="value" :step="10" aria-label="Slider with labels" />
    </div>
  </div>
</template>
