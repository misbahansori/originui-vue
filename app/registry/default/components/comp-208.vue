<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Select with error</Label>
    <Select default-value="1">
      <SelectTrigger aria-invalid="true">
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
