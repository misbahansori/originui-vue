<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { ref } from "vue";

const textValue = ref("");
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Shorter textarea</Label>
    <Textarea class="min-h-0" v-model="textValue" placeholder="Leave a comment" rows="2" />
  </div>
</template>
