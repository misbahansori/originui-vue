<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Simple select with default value</Label>
    <Select default-value="1">
      <SelectTrigger :id="id">
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Vue</SelectItem>
        <SelectItem value="2">Nuxt</SelectItem>
        <SelectItem value="3">Astro</SelectItem>
        <SelectItem value="4">Vitesse</SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
