<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { computed, ref } from "vue";

const inputValue = ref("");
const maxLength = 8;

const charactersLeft = computed(() => maxLength - inputValue.value.length);
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Input with characters left</Label>
    <Input v-model="inputValue" type="text" :maxlength="maxLength" />
    <p class="text-muted-foreground mt-2 text-xs" role="status" aria-live="polite">
      <span class="tabular-nums">{{ charactersLeft }}</span>
      characters left
    </p>
  </div>
</template>
