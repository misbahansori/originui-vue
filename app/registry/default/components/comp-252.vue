<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";
import { LucideVolume2, LucideVolumeX } from "lucide-vue-next";
import { ref } from "vue";

const value = ref([25]);
</script>

<template>
  <div class="space-y-3">
    <div class="flex items-center justify-between gap-2">
      <Label class="leading-6">Volume</Label>
      <span class="text-sm font-medium tabular-nums">{{ value[0] }}</span>
    </div>
    <div class="flex items-center gap-2">
      <LucideVolumeX class="shrink-0 opacity-60" :size="16" aria-hidden="true" />
      <Slider v-model="value" aria-label="Volume slider" />
      <LucideVolume2 class="shrink-0 opacity-60" :size="16" aria-hidden="true" />
    </div>
  </div>
</template>
