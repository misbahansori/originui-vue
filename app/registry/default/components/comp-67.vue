<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { ref } from "vue";

const textValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="disabled-textarea">Disabled textarea</Label>
    <Textarea
      id="disabled-textarea"
      v-model="textValue"
      placeholder="Leave a comment"
      disabled
    />
  </div>
</template>
