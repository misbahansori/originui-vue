<script setup lang="ts">
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { ref } from "vue";

const checkedItems = ref({
  "1": false,
  "2": false,
  "3": false,
});
</script>

<template>
  <div class="grid gap-3">
    <div class="flex items-center gap-2">
      <Checkbox v-model="checkedItems['1']" />
      <Label>Vue</Label>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox v-model="checkedItems['2']" />
      <Label>Nuxt</Label>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox v-model="checkedItems['3']" />
      <Label>Astro</Label>
    </div>
  </div>
</template>
