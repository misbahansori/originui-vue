<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { NativeSelect } from "@/registry/default/ui/native-select";

</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Multiple select (native)</Label>
    <div
      class="border-input focus-within:border-ring focus-within:ring-ring/50 overflow-hidden rounded-md border focus-within:ring-[3px]"
    >
      <NativeSelect
        id="input"
        :modelValue="['1', '5']"
        multiple
        class="[&_option:checked]:bg-accent h-auto rounded-none border-none px-0 py-0.5 focus-visible:ring-0 [&>option]:px-3 [&>option]:py-1"
      >
        <option value="1">React</option>
        <option value="2">Next.js</option>
        <option value="3">Astro</option>
        <option value="4">Gatsby</option>
        <option value="5">Vue</option>
        <option value="6">Angular</option>
      </NativeSelect>
    </div>
  </div>
</template>
