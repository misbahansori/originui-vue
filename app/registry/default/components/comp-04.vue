<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

</script>

<template>
  <div class="*:not-first:mt-2">
    <div class="flex items-center justify-between gap-1">
      <Label for="input">Input with hint</Label>
      <span class="text-muted-foreground text-sm">Optional</span>
    </div>
    <Input id="input" placeholder="Email" type="email" />
  </div>
</template>
