<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with inline start and end add-on</Label>
    <div class="relative flex rounded-md shadow-xs">
      <span
        class="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm"
      >
        €
      </span>
      <Input
        :id="id"
        class="-me-px rounded-e-none ps-6 shadow-none"
        placeholder="0.00"
        type="text"
      />
      <span
        class="border-input bg-background text-muted-foreground -z-10 inline-flex items-center rounded-e-md border px-3 text-sm"
      >
        EUR
      </span>
    </div>
  </div>
</template>
