<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { ref } from "vue";

const textValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Autogrowing textarea</Label>
    <Textarea
      class="field-sizing-content max-h-29.5 min-h-0 resize-none py-1.75"
      v-model="textValue"
      placeholder="Leave a comment"
    />
  </div>
</template>
