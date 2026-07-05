<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch id="input" />
    <Label class="sr-only">Simple switch</Label>
  </div>
</template>
