<script setup lang="ts">
const textValue = ref("");
</script>

<template>
  <div
    class="[--ring:var(--color-indigo-300)] *:not-first:mt-2 in-[.dark]:[--ring:var(--color-indigo-900)]"
  >
    <Label for="colored-textarea">Textarea with colored border and ring</Label>
    <Textarea
      id="colored-textarea"
      v-model="textValue"
      placeholder="Leave a comment"
    />
  </div>
</template>
