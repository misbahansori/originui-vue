<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";
import { ref } from "vue";

const value = ref([25]);
</script>

<template>
  <div class="*:not-first:mt-4">
    <Label>Slider with square thumb</Label>
    <Slider
      v-model="value"
      :max="100"
      :step="10"
      class="[&>:last-child]:rounded"
      aria-label="Slider with square thumb"
    />
  </div>
</template>
