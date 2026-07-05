<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch
      class="[&_span]:border-input h-3 w-9 border-none outline-offset-[6px] [&_span]:border"
    />
    <Label class="sr-only">M2-style switch</Label>
  </div>
</template>
