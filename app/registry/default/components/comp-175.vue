<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";

const id = useId();
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch :id="id" disabled />
    <Label :for="id" class="sr-only">Disabled</Label>
  </div>
</template>
