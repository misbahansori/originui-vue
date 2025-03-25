<script setup lang="ts">
import { ref, useId } from "vue";

const id = useId();
const checked = ref(true);
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch :id="id" v-model:checked="checked" aria-label="Toggle switch" />
    <Label :for="id">
      <span class="sr-only">Toggle switch</span>
      <Icon v-if="checked" name="lucide:sun" size="16" aria-hidden="true" />
      <Icon v-else name="lucide:moon" size="16" aria-hidden="true" />
    </Label>
  </div>
</template>
