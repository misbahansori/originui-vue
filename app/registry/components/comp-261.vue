<script setup lang="ts">
import { ref } from "vue";

const value = ref([5]);
</script>

<template>
  <div class="*:not-first:mt-4">
    <Label>Vertical slider</Label>
    <div class="flex h-40 justify-center">
      <Slider
        v-model="value"
        :max="10"
        orientation="vertical"
        aria-label="Vertical slider"
      />
    </div>
  </div>
</template>
