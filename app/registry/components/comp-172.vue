<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch :id="id" />
    <Label :for="id" class="sr-only">Simple switch</Label>
  </div>
</template>
