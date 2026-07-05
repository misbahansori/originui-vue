<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="input">Input with helper text</Label>
    <Input id="input" placeholder="Email" type="email" />
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
      We won't share your email with anyone
    </p>
  </div>
</template>
