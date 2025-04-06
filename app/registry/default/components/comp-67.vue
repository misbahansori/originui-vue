<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { ref, useId } from "vue";

const textValue = ref("");
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Disabled textarea</Label>
    <Textarea
      :id="id"
      v-model="textValue"
      placeholder="Leave a comment"
      disabled
    />
  </div>
</template>
