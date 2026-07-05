<script setup lang="ts">
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { ref } from "vue";

const checked = ref(true);
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox v-model="checked" />
    <Label class="peer-data-[state=checked]:line-through">Simple todo item</Label>
  </div>
</template>
