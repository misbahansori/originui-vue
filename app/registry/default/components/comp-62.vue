<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { ref } from "vue";

const textValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <div class="flex items-center justify-between gap-1">
      <Label for="hint-textarea" class="leading-6">Textarea with hint</Label>
      <span class="text-muted-foreground text-sm">Optional</span>
    </div>
    <Textarea
      id="hint-textarea"
      v-model="textValue"
      placeholder="Leave a comment"
    />
  </div>
</template>
