<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { ref, useId } from "vue";

const textValue = ref("");
const id = useId();
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label :for="id">Textarea with no resize</Label>
    <Textarea :id="id" class="[resize:none]" v-model="textValue" placeholder="Leave a comment" />
  </div>
</template>
