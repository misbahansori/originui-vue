<script setup lang="ts">
import { ref, useId } from "vue";

const id = useId();
const checked = ref(true);
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch :id="id" v-model:checked="checked" aria-label="Toggle switch" />
    <Label :for="id" class="text-sm font-medium">
      {{ checked ? "On" : "Off" }}
    </Label>
  </div>
</template>
