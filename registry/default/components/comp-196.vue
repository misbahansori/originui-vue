<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Disabled select (native)</Label>
    <SelectNative :id="id" disabled>
      <option value="1">Vue</option>
      <option value="2">Nuxt</option>
      <option value="3">Astro</option>
      <option value="4">Vitesse</option>
    </SelectNative>
  </div>
</template>
