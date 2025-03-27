<script setup lang="ts">
const textValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="helper-textarea">Textarea with helper text</Label>
    <Textarea
      id="helper-textarea"
      v-model="textValue"
      placeholder="Leave a comment"
    />
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Please add as many details as you can
    </p>
  </div>
</template>
