<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Select with disabled options</Label>
    <Select default-value="2">
      <SelectTrigger :id="id">
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1" disabled>Vue</SelectItem>
        <SelectItem value="2">Nuxt</SelectItem>
        <SelectItem value="3" disabled>Astro</SelectItem>
        <SelectItem value="4">Vitesse</SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
