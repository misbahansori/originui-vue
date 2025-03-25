<script setup lang="ts">
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
      class="[&>:last-child>span]:rounded"
      aria-label="Slider with square thumb"
    />
  </div>
</template>
