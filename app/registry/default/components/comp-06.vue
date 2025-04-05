<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with error</Label>
    <Input
      :id="id"
      class="peer"
      placeholder="Email"
      type="email"
      value="invalid@email.com"
      aria-invalid="true"
    />
    <p
      class="peer-aria-invalid:text-destructive mt-2 text-xs"
      role="alert"
      aria-live="polite"
    >
      Email is invalid
    </p>
  </div>
</template>
