<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";
import { LucideMoon, LucideSun } from "lucide-vue-next";
import { ref } from "vue";

const id = useId();
const checked = ref(true);
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch :id="id" v-model="checked" aria-label="Toggle switch" />
    <Label :for="id">
      <span class="sr-only">Toggle switch</span>
      <LucideSun v-if="checked" :size="16" aria-hidden="true" />
      <LucideMoon v-else :size="16" aria-hidden="true" />
    </Label>
  </div>
</template>
