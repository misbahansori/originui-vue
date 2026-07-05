<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="input">Disabled input</Label>
    <Input id="input" placeholder="Email" type="email" disabled />
  </div>
</template>
