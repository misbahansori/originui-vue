<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";
import { reactive } from "vue";

const values = reactive({
  "60Hz": [2],
  "250Hz": [1],
  "1kHz": [-1],
  "4kHz": [-3],
  "16kHz": [2],
});
</script>

<template>
  <div class="space-y-4">
    <legend class="text-foreground text-sm font-medium">Equalizer</legend>
    <div class="flex h-48 justify-center gap-8">
      <div class="flex flex-col items-center gap-2">
        <Slider
          v-model="values['60Hz']"
          :min="-5"
          :max="5"
          orientation="vertical"
          class="[&>:last-child]:h-6 [&>:last-child]:w-4 [&>:last-child]:rounded"
          aria-label="60 Hz"
          show-tooltip
        />
        <Label class="text-muted-foreground flex w-0 justify-center text-xs">60</Label>
      </div>
      <div class="flex flex-col items-center gap-2">
        <Slider
          v-model="values['250Hz']"
          :min="-5"
          :max="5"
          orientation="vertical"
          class="[&>:last-child]:h-6 [&>:last-child]:w-4 [&>:last-child]:rounded"
          aria-label="250 Hz"
          show-tooltip
        />
        <Label class="text-muted-foreground flex w-0 justify-center text-xs">250</Label>
      </div>
      <div class="flex flex-col items-center gap-2">
        <Slider
          v-model="values['1kHz']"
          :min="-5"
          :max="5"
          orientation="vertical"
          class="[&>:last-child]:h-6 [&>:last-child]:w-4 [&>:last-child]:rounded"
          aria-label="1k"
          show-tooltip
        />
        <Label class="text-muted-foreground flex w-0 justify-center text-xs">1k</Label>
      </div>
      <div class="flex flex-col items-center gap-2">
        <Slider
          v-model="values['4kHz']"
          :min="-5"
          :max="5"
          orientation="vertical"
          class="[&>:last-child]:h-6 [&>:last-child]:w-4 [&>:last-child]:rounded"
          aria-label="4k"
          show-tooltip
        />
        <Label class="text-muted-foreground flex w-0 justify-center text-xs">4k</Label>
      </div>
      <div class="flex flex-col items-center gap-2">
        <Slider
          v-model="values['16kHz']"
          :min="-5"
          :max="5"
          orientation="vertical"
          class="[&>:last-child]:h-6 [&>:last-child]:w-4 [&>:last-child]:rounded"
          aria-label="16k"
          show-tooltip
        />
        <Label class="text-muted-foreground flex w-0 justify-center text-xs">16K</Label>
      </div>
    </div>
  </div>
</template>
