<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { NativeSelect } from "@/registry/default/ui/native-select";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Select with helper text (native)</Label>
    <NativeSelect :id="id" modelValue="1">
      <option value="1">Vue</option>
      <option value="2">Nuxt</option>
      <option value="3">Astro</option>
      <option value="4">Vitesse</option>
    </NativeSelect>
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
      Tell us what's your favorite Select framework
    </p>
  </div>
</template>
