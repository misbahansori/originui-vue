<script setup lang="ts">
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { ref, useId } from "vue";

const id = useId();
const checked = ref(true);
</script>

<template>
  <div
    class="flex items-center gap-2 [--primary:var(--color-indigo-500)] [--ring:var(--color-indigo-300)] in-[.dark]:[--primary:var(--color-indigo-500)] in-[.dark]:[--ring:var(--color-indigo-900)]"
  >
    <Checkbox :id="id" v-model="checked" />
    <Label :for="id">Colored checkbox</Label>
  </div>
</template>
