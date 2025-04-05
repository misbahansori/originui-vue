<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { ref } from "vue";

const textValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label for="button-textarea">Textarea with left button</Label>
    <Textarea
      id="button-textarea"
      v-model="textValue"
      placeholder="Leave a comment"
    />
    <Button variant="outline">Send</Button>
  </div>
</template>
