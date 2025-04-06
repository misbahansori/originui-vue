<script setup lang="ts">
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { ref, useId } from "vue";

const id = useId();
const checked = ref(false);
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox :id="id" v-model="checked" />
    <Label :for="id">Simple checkbox</Label>
  </div>
</template>
