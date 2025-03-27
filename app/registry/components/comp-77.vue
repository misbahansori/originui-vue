<script setup lang="ts">
const textValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="autogrowing-textarea">Autogrowing textarea</Label>
    <Textarea
      id="autogrowing-textarea"
      class="field-sizing-content max-h-29.5 min-h-[none] resize-none py-1.75"
      v-model="textValue"
      placeholder="Leave a comment"
    />
  </div>
</template>
