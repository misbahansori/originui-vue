<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";
import { ref } from "vue";

const value = ref([25, 50, 100]);

const formatTooltip = (val: number) => `${val}%`;
</script>

<template>
  <div class="*:not-first:mt-4">
    <Label>Slider with multiple thumbs</Label>
    <Slider
      v-model="value"
      aria-label="Slider with multiple thumbs"
      :show-tooltip="true"
      :tooltip-content="formatTooltip"
    />
  </div>
</template>
