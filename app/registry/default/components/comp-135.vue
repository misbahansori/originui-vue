<script setup lang="ts">
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { ref } from "vue";

const checked = ref(false);
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox v-model="checked" disabled />
    <Label>Disabled checkbox</Label>
  </div>
</template>
