<script setup lang="ts">
import { ref } from "vue";

const textValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="no-resize-textarea">Textarea with no resize</Label>
    <Textarea
      id="no-resize-textarea"
      class="[resize:none]"
      v-model="textValue"
      placeholder="Leave a comment"
    />
  </div>
</template>
