<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { ref, useId } from "vue";

const textValue = ref("");
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Textarea with helper text</Label>
    <Textarea :id="id" v-model="textValue" placeholder="Leave a comment" />
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
      Please add as many details as you can
    </p>
  </div>
</template>
