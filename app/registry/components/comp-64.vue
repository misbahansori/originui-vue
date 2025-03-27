<script setup lang="ts">
const textValue = ref("Hello!");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="error-textarea">Textarea with error</Label>
    <Textarea
      id="error-textarea"
      v-model="textValue"
      placeholder="Leave a comment"
      aria-invalid="true"
    />
    <p class="text-destructive mt-2 text-xs" role="alert" aria-live="polite">
      Message should be at least 10 characters
    </p>
  </div>
</template>
