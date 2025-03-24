<script setup lang="ts">
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch
      :id="id"
      class="[&_span]:border-input h-3 w-9 border-none outline-offset-[6px] [&_span]:border"
    />
    <Label :for="id" class="sr-only">M2-style switch</Label>
  </div>
</template>
