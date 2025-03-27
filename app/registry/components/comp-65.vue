<script setup lang="ts">
const textValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="gray-textarea">Textarea with gray background</Label>
    <Textarea
      id="gray-textarea"
      class="bg-muted border-transparent shadow-none"
      v-model="textValue"
      placeholder="Leave a comment"
    />
  </div>
</template>
