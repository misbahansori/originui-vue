<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { ref } from "vue";

const selectedValue = ref("1");
</script>

<template>
  <RadioGroup
    v-model="selectedValue"
    class="[--primary:var(--color-indigo-500)] [--ring:var(--color-indigo-300)] in-[.dark]:[--primary:var(--color-indigo-500)] in-[.dark]:[--ring:var(--color-indigo-900)]"
  >
    <div class="flex items-center gap-2">
      <RadioGroupItem value="1" />
      <Label>Option 1</Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="2" />
      <Label>Option 2</Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="3" />
      <Label>Option 3</Label>
    </div>
  </RadioGroup>
</template>
