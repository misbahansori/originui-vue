<script setup lang="ts">
const textValue = ref("This is a read-only textarea");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="readonly-textarea">Read-only textarea</Label>
    <Textarea
      id="readonly-textarea"
      class="read-only:bg-muted"
      v-model="textValue"
      placeholder="Leave a comment"
      readonly
    />
  </div>
</template>
