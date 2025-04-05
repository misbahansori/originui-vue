<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">File input</Label>
    <Input
      :id="id"
      class="p-0 pe-3 file:me-3 file:border-0 file:border-e"
      type="file"
    />
  </div>
</template>
