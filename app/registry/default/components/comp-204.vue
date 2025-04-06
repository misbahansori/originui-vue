<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Select with placeholder</Label>
    <Select>
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
