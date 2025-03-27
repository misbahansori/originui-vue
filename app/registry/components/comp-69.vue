<script setup lang="ts">
const textValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="right-button-textarea">Textarea with right button</Label>
    <Textarea
      id="right-button-textarea"
      v-model="textValue"
      placeholder="Leave a comment"
    />
    <div class="flex justify-end">
      <Button variant="outline">Send</Button>
    </div>
  </div>
</template>
