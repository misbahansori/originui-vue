<script setup lang="ts">
const id = useId();
</script>

<template>
  <div
    class="inline-flex items-center gap-2 [--primary:var(--color-indigo-500)] [--ring:var(--color-indigo-300)] in-[.dark]:[--primary:var(--color-indigo-500)] in-[.dark]:[--ring:var(--color-indigo-900)]"
  >
    <Switch :id="id" :default-checked="true" />
    <Label :for="id" class="sr-only">Colored switch</Label>
  </div>
</template>
