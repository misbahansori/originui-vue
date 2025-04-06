<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";

const id = useId();
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch :id="id" class="rounded-sm [&_span]:rounded" />
    <Label :for="id" class="sr-only">Square switch</Label>
  </div>
</template>
