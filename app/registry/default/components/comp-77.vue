<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { ref, useId } from "vue";

const textValue = ref("");
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Autogrowing textarea</Label>
    <Textarea
      :id="id"
      class="field-sizing-content max-h-29.5 min-h-0 resize-none py-1.75"
      v-model="textValue"
      placeholder="Leave a comment"
    />
  </div>
</template>
