<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with gray background</Label>
    <Input
      :id="id"
      class="bg-muted border-transparent shadow-none"
      placeholder="Email"
      type="email"
    />
  </div>
</template>
