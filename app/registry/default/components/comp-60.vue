<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { ref } from "vue";

const textValue = ref("");
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">
      Required textarea
      <span class="text-destructive">*</span>
    </Label>
    <Textarea :id="id" v-model="textValue" placeholder="Leave a message" required />
  </div>
</template>
