<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { SelectNative } from "@/registry/default/ui/select-native";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">
      Required select (native)
      <span class="text-destructive">*</span>
    </Label>
    <SelectNative :id="id">
      <option value="1">Vue</option>
      <option value="2">Nuxt</option>
      <option value="3">Astro</option>
      <option value="4">Vitesse</option>
    </SelectNative>
  </div>
</template>
