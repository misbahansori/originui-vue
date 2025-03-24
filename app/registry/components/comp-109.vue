<script setup lang="ts">
import { ref } from "vue";

const value = ref("center");
</script>

<template>
  <ToggleGroup
    variant="outline"
    class="inline-flex"
    type="single"
    v-model="value"
  >
    <ToggleGroupItem value="left">Left</ToggleGroupItem>
    <ToggleGroupItem value="center">Center</ToggleGroupItem>
    <ToggleGroupItem value="right">Right</ToggleGroupItem>
  </ToggleGroup>
</template>
