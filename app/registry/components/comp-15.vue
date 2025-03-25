<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with end add-on</Label>
    <div class="flex rounded-md shadow-xs">
      <Input
        :id="id"
        class="-me-px rounded-e-none shadow-none"
        placeholder="google"
        type="text"
      />
      <span
        class="border-input bg-background text-muted-foreground -z-10 inline-flex items-center rounded-e-md border px-3 text-sm"
      >
        .com
      </span>
    </div>
  </div>
</template>
