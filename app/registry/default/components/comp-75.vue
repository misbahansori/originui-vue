<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { ref } from "vue";

const textValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Textarea with no resize</Label>
    <Textarea class="[resize:none]" v-model="textValue" placeholder="Leave a comment" />
  </div>
</template>
