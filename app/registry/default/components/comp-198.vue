<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { NativeSelect } from "@/registry/default/ui/native-select";
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Select with auto-width (native)</Label>
    <div class="w-fit">
      <NativeSelect id="input" modelValue="1">
        <option value="1">Vue</option>
        <option value="2">Nuxt</option>
        <option value="3">Astro</option>
        <option value="4">Vitesse</option>
      </NativeSelect>
    </div>
  </div>
</template>
