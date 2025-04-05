<script setup lang="ts">
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Select with error</Label>
    <Select default-value="1">
      <SelectTrigger :id="id" aria-invalid="true">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Vue</SelectItem>
        <SelectItem value="2">Nuxt</SelectItem>
        <SelectItem value="3">Astro</SelectItem>
        <SelectItem value="4">Vitesse</SelectItem>
      </SelectContent>
    </Select>
    <p class="text-destructive mt-2 text-xs" role="alert" aria-live="polite">
      Selected option is invalid
    </p>
  </div>
</template>
