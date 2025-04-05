<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { ref } from "vue";

const textValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="right-button-textarea">Textarea with right button</Label>
    <Textarea
      id="right-button-textarea"
      v-model="textValue"
      placeholder="Leave a comment"
    />
    <div class="flex justify-end">
      <Button variant="outline">Send</Button>
    </div>
  </div>
</template>
