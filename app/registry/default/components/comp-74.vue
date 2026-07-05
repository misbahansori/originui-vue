<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { computed, ref } from "vue";

const maxLength = 180;
const textValue = ref("");

const characterCount = computed(() => {
  return textValue.value.length;
});

const charactersLeft = computed(() => {
  return maxLength - characterCount.value;
});
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Textarea with characters left</Label>
    <Textarea
      v-model="textValue"
      :maxlength="maxLength"
      aria-describedby="character-count-description"
    />
    <p
      id="character-count-description"
      class="text-muted-foreground mt-2 text-right text-xs"
      role="status"
      aria-live="polite"
    >
      <span class="tabular-nums">{{ charactersLeft }}</span>
      characters left
    </p>
  </div>
</template>
