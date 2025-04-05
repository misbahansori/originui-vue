<script setup lang="ts">
const textValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="disabled-textarea">Disabled textarea</Label>
    <Textarea
      id="disabled-textarea"
      v-model="textValue"
      placeholder="Leave a comment"
      disabled
    />
  </div>
</template>
