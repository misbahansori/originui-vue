<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Input with helper text</Label>
    <Input placeholder="Email" type="email" />
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      We won't share your email with anyone
    </p>
  </div>
</template>
