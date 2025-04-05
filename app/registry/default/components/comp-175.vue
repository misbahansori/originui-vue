<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch :id="id" disabled />
    <Label :for="id" class="sr-only">Disabled</Label>
  </div>
</template>
