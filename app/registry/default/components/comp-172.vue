<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch :id="id" />
    <Label :for="id" class="sr-only">Simple switch</Label>
  </div>
</template>
