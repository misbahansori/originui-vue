<script setup lang="ts">
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { ref } from "vue";

const checked = ref(false);
</script>

<template>
  <div class="flex items-center justify-between gap-2">
    <Checkbox class="order-1" v-model="checked" />
    <Label>Right aligned checkbox</Label>
  </div>
</template>
