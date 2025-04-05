<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div
    class="[--ring:var(--color-indigo-300)] *:not-first:mt-2 in-[.dark]:[--ring:var(--color-indigo-900)]"
  >
    <Label :for="id">Input with colored border and ring</Label>
    <Input :id="id" placeholder="Email" type="email" />
  </div>
</template>
