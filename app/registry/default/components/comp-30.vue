<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">File input</Label>
    <Input
      :id="id"
      class="p-0 pe-3 file:me-3 file:border-0 file:border-e"
      type="file"
    />
  </div>
</template>
