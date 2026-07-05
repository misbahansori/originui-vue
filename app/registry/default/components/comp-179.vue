<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";
import { ref } from "vue";

const checked = ref(true);
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch id="input" v-model="checked" aria-label="Toggle switch" />
    <Label class="text-sm font-medium">
      {{ checked ? "On" : "Off" }}
    </Label>
  </div>
</template>
