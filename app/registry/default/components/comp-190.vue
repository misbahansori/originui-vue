<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { NativeSelect } from "@/registry/default/ui/native-select";

</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Select with placeholder (native)</Label>
    <NativeSelect id="input" modelValue="">
      <option value="" disabled>Please select a value</option>
      <option value="1">1 to 5</option>
      <option value="2">5 to 10</option>
      <option value="3">More than 10</option>
    </NativeSelect>
  </div>
</template>
