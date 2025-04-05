<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { ref, useId } from "vue";

const textValue = ref("This is a read-only textarea");
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Read-only textarea</Label>
    <Textarea
      :id="id"
      class="read-only:bg-muted"
      v-model="textValue"
      placeholder="Leave a comment"
      readonly
    />
  </div>
</template>
