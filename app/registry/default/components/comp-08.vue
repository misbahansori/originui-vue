<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Disabled input</Label>
    <Input :id="id" placeholder="Email" type="email" disabled />
  </div>
</template>
