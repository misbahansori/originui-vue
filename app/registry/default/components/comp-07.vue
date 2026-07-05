<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Input with gray background</Label>
    <Input class="bg-muted border-transparent shadow-none" placeholder="Email" type="email" />
  </div>
</template>
