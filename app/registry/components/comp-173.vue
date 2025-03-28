<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch
      :id="id"
      class="h-5 w-8 [&_span]:size-4 data-[state=checked]:[&_span]:translate-x-3 data-[state=checked]:[&_span]:rtl:-translate-x-3"
    />
    <Label :for="id" class="sr-only">Small switch</Label>
  </div>
</template>
