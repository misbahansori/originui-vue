<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { ref } from "vue";

const textValue = ref("This is a read-only textarea");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Read-only textarea</Label>
    <Textarea
      class="read-only:bg-muted"
      v-model="textValue"
      placeholder="Leave a comment"
      readonly
    />
  </div>
</template>
