<script setup lang="ts">
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Select with option groups (native)</Label>
    <SelectNative :id="id">
      <optgroup label="Frontend">
        <option value="1">Vue</option>
        <option value="2">Nuxt</option>
        <option value="3">Angular</option>
      </optgroup>
      <optgroup label="Backend">
        <option value="4">Node.js</option>
        <option value="5">Python</option>
        <option value="6">PHP</option>
      </optgroup>
    </SelectNative>
  </div>
</template>
