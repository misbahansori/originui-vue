<script setup lang="ts">
import { ref } from "vue";

const textValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="button-textarea">Textarea with left button</Label>
    <Textarea
      id="button-textarea"
      v-model="textValue"
      placeholder="Leave a comment"
    />
    <Button variant="outline">Send</Button>
  </div>
</template>
