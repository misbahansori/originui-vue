<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">
      Required input
      <span class="text-destructive">*</span>
    </Label>
    <Input :id="id" placeholder="Email" type="email" required />
  </div>
</template>
