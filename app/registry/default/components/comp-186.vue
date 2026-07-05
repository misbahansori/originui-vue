<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";
</script>

<template>
  <div
    class="border-input has-data-[state=checked]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none"
  >
    <Switch
      class="order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 data-[state=checked]:[&_span]:translate-x-2 data-[state=checked]:[&_span]:rtl:-translate-x-2"
    />
    <div class="grid grow gap-2">
      <Label>
        Label
        <span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
      </Label>
      <p class="text-muted-foreground text-xs">A short description goes here.</p>
    </div>
  </div>
</template>
