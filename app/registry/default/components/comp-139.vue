<script setup lang="ts">
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { ref } from "vue";

const checked1 = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);
</script>

<template>
  <div class="flex gap-6">
    <div class="flex items-center gap-2">
      <Checkbox v-model="checked1" />
      <Label>Vue</Label>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox v-model="checked2" />
      <Label>Nuxt</Label>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox v-model="checked3" />
      <Label>Astro</Label>
    </div>
  </div>
</template>
