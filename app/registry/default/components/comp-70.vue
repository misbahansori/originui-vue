<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { ref } from "vue";

const textValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="full-button-textarea">Textarea with button</Label>
    <Textarea
      id="full-button-textarea"
      v-model="textValue"
      placeholder="Leave a comment"
    />
    <Button variant="outline" class="w-full">Send</Button>
  </div>
</template>
