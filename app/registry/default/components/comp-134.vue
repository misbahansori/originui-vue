<script setup lang="ts">
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { ref } from "vue";

const checked = ref(true);
</script>

<template>
  <div
    class="flex items-center gap-2 [--primary:var(--color-indigo-500)] [--ring:var(--color-indigo-300)] in-[.dark]:[--primary:var(--color-indigo-500)] in-[.dark]:[--ring:var(--color-indigo-900)]"
  >
    <Checkbox v-model="checked" />
    <Label>Colored checkbox</Label>
  </div>
</template>
