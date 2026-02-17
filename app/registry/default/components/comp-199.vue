<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { NativeSelect } from "@/registry/default/ui/native-select";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Select with option groups (native)</Label>
    <NativeSelect :id="id" modelValue="1">
      <optgroup label="Frontend">
        <option value="1">Vue</option>
        <option value="2">Nuxt</option>
        <option value="3">Angular</option>
      </optgroup>
      <optgroup label="Backend">
        <option value="4">Node.js</option>
        <option value="5">Python</option>
        <option value="6">PHP</option>
      </optgroup>
    </NativeSelect>
  </div>
</template>
