<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { NativeSelect } from "@/registry/default/ui/native-select";
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Select with error (native)</Label>
    <NativeSelect modelValue="1" aria-invalid="true">
      <option value="1">Vue</option>
      <option value="2">Nuxt</option>
      <option value="3">Astro</option>
      <option value="4">Vitesse</option>
    </NativeSelect>
    <p class="text-destructive mt-2 text-xs" role="alert" aria-live="polite">
      Selected option is invalid
    </p>
  </div>
</template>
