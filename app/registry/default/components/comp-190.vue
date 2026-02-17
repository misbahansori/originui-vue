<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { NativeSelect } from "@/registry/default/ui/native-select";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Select with placeholder (native)</Label>
    <NativeSelect :id="id" modelValue="">
      <option value="" disabled>Please select a value</option>
      <option value="1">1 to 5</option>
      <option value="2">5 to 10</option>
      <option value="3">More than 10</option>
    </NativeSelect>
  </div>
</template>
