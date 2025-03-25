<script setup lang="ts">
import { ref } from "vue";

const value = ref([25, 75]);
</script>

<template>
  <div class="*:not-first:mt-4">
    <Label>Dual range slider</Label>
    <Slider v-model="value" :step="10" aria-label="Dual range slider" />
  </div>
</template>
