<script setup lang="ts">
import { ref } from "vue";

const textValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="shorter-textarea">Shorter textarea</Label>
    <Textarea
      id="shorter-textarea"
      class="min-h-[none]"
      v-model="textValue"
      placeholder="Leave a comment"
      rows="2"
    />
  </div>
</template>
