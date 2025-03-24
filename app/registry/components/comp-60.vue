<script setup lang="ts">
import { ref } from "vue";

const textValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="required-textarea">
      Required textarea
      <span class="text-destructive">*</span>
    </Label>
    <Textarea
      id="required-textarea"
      v-model="textValue"
      placeholder="Leave a message"
      required
    />
  </div>
</template>
