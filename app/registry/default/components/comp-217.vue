<script setup lang="ts">
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
  <div
    class="border-input bg-background focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive relative rounded-md border shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[input:is(:disabled)]:*:pointer-events-none"
  >
    <label
      :for="id"
      class="text-foreground block px-3 pt-2 text-xs font-medium"
    >
      Select with inset label
    </label>
    <Select>
      <SelectTrigger
        :id="id"
        class="border-none bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
      >
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
