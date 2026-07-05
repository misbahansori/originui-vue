<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { NativeSelect } from "@/registry/default/ui/native-select";
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>
      Required select (native)
      <span class="text-destructive">*</span>
    </Label>
    <NativeSelect modelValue="1">
      <option value="1">Vue</option>
      <option value="2">Nuxt</option>
      <option value="3">Astro</option>
      <option value="4">Vitesse</option>
    </NativeSelect>
  </div>
</template>
