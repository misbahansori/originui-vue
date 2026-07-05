<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="input">Input with button</Label>
    <div class="flex gap-2">
      <Input id="input" class="flex-1" placeholder="Email" type="email" />
      <Button variant="outline">Send</Button>
    </div>
  </div>
</template>
