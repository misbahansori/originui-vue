<script setup lang="ts">
const textValue = ref("");
</script>

<template>
  <div class="group relative">
    <Label
      for="overlapping-textarea"
      class="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50"
    >
      Textarea with overlapping label
    </Label>
    <Textarea id="overlapping-textarea" v-model="textValue" />
  </div>
</template>
