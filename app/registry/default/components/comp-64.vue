<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { ref, useId } from "vue";

const textValue = ref("Hello!");
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Textarea with error</Label>
    <Textarea
      :id="id"
      v-model="textValue"
      placeholder="Leave a comment"
      aria-invalid="true"
    />
    <p class="text-destructive mt-2 text-xs" role="alert" aria-live="polite">
      Message should be at least 10 characters
    </p>
  </div>
</template>
