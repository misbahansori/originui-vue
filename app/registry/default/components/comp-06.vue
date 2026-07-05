<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Input with error</Label>
    <Input
      class="peer"
      placeholder="Email"
      type="email"
      value="invalid@email.com"
      aria-invalid="true"
    />
    <p class="peer-aria-invalid:text-destructive mt-2 text-xs" role="alert" aria-live="polite">
      Email is invalid
    </p>
  </div>
</template>
