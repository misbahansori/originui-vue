<script setup lang="ts">
import { ref } from "vue";

const textValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="simple-textarea">Simple textarea</Label>
    <Textarea
      id="simple-textarea"
      v-model="textValue"
      placeholder="Leave a comment"
    />
  </div>
</template>
