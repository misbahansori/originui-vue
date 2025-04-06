<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";
import { ref } from "vue";

const value = ref([25]);
</script>

<template>
  <div class="*:not-first:mt-4">
    <Label>Disabled slider</Label>
    <Slider v-model="value" disabled aria-label="Disabled slider" />
  </div>
</template>
