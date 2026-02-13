<script setup lang="ts">
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { ref, useId } from "vue";

const id = useId();
const checked = ref(true);
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox :id="id" v-model="checked" />
    <Label :for="id" class="peer-data-[state=checked]:line-through">Simple todo item</Label>
  </div>
</template>
