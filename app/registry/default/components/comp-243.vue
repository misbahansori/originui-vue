<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";
import { ref } from "vue";

const value = ref([25]);
</script>

<template>
  <div class="*:not-first:mt-4">
    <Label>Slider with solid thumb</Label>
    <Slider
      v-model="value"
      class="[&>:last-child]:bg-primary [&>:first-child]:opacity-70"
      aria-label="Slider with solid thumb"
    />
  </div>
</template>
