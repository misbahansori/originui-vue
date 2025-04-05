<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Input with gray background</Label>
    <Input
      :id="id"
      class="bg-muted border-transparent shadow-none"
      placeholder="Email"
      type="email"
    />
  </div>
</template>
